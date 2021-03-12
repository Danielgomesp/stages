import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Loader, getTheme } from 'styled-minimal';

export default function Child({ color, callBackHandler, duration }) {
  const { colors } = getTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Quando o componente é montado, executa o callback que altera estado do Parent
  useEffect(() => {
    callBackHandler();
  }, []);

  // Atualiza o estado do child para remover o Loader e pintar o fundo
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), duration);
  }, [duration]);

  return (
    <Box
      data-testid="ChildElement"
      alignItems="center"
      bg={isLoaded ? color : 'transparent'}
      border={`2px solid ${colors[color]}`}
      borderRadius="8px"
      display="flex"
      height={128}
      justifyContent="center"
      marginBottom="20px"
      fontWeight="700"
    >
      {
        isLoaded ? (
          <span>{`Carregado em: ${duration}ms`}</span>
        ) : (
          <Loader color={colors[color]} size={48} />
        )
      }
    </Box>
  );
}

Child.propTypes = {
  color: PropTypes.string,
  callBackHandler: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
};

Child.defaultProps = {
  color: 'orange',
};
