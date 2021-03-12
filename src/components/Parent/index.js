import React, { useState } from 'react';
import { Container, Heading, Paragraph } from 'styled-minimal';
import { steps, durations } from 'data.json';

import { mapSteps } from 'helpers';

import Child from '../Child';

import 'styles.css';

// O mappedSteps recebe um array com todos os dados que eu preciso.
const mappedSteps = mapSteps(steps, durations);

// A ideia é: A cada iteração, eu removo um item do mappedSteps e adiciono ao estado fila(queue).
// A partir desse estado eu faço o looping renderizando o Child.
// Começando aqui, será removido o 1º item do mappedSteps e passo como primeiro estado da fila.
const initialState = [mappedSteps.shift()];

export default function Parent() {
  const [queue, setQueue] = useState(initialState);
  const [totalDuration, setTotalDuration] = useState(0);
  const [haveFinished, setHaveFinished] = useState(false);

  function handleCallBack() {
    const currentItem = queue[queue.length - 1]; //  Recebe último item da fila.

    // Aqui está a 'mágica'.
    // Aguardo o tempo (duration) de cada item para então
    // atualizar o estado.
    setTimeout(() => {
      setTotalDuration(totalDuration + currentItem.duration);

      if (mappedSteps.length === 0) {
        setHaveFinished(true);
        return;
      }

      setQueue([
        ...queue,
        mappedSteps.shift(),
      ]);
    }, currentItem.duration);
  }

  return (
    <Container data-testid="ParentElement">
      <Heading mb={4} textAlign="center">
        Stages
      </Heading>
      {
        queue.map((item) => (
          <Child
            key={item.key}
            color={item.value}
            callBackHandler={handleCallBack}
            duration={item.duration}
          />
        ))
      }
      <div>
        {
          haveFinished
          // hehehe
          && (
            <>
              <Paragraph fontWeight="600" marginTop="30px">
                {`Tempo total: ${totalDuration}ms`}
              </Paragraph>
              <img
                alt="OMG, we should hire him"
                src="https://blogpilates.com.br/wp-content/uploads/2019/06/gif-uau.gif"
                width="280"
              />
            </>
          )
        }
      </div>
    </Container>
  );
}
