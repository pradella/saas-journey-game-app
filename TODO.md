# Task list

## Listar troféus

- Criar um componente `<GameTrophies/>`, que listará os trofeus de um game
- Este componente deverá ser inserido no component `<GameTrophies/>`
- No `<GameTrophies/>`, chamar o endpoint para carregar os troféus do Sonic Origins: [https://us-central1-pradella-me.cloudfunctions.net/games/user/3243454007233303489/trophies?titleIds=PPSA05324_00](https://us-central1-pradella-me.cloudfunctions.net/games/user/3243454007233303489/trophies?titleIds=PPSA05324_00)
- Listar os troféus vindos do endpoint
- Exibir icone do trofeu e nome, e um icon de check caso o troféu seja `earned === true`

## Plus

- Criar um `<select>` para filtrar os trofeus (all, earned e not earned) - (para isso explorar a função [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
- Ao invés de carregar o endpoint a partir do `onClick` do botão, fazer carregar no `onLoad` do componente (para isso, usar a função [useEffect](https://reactjs.org/docs/hooks-effect.html) do React).
