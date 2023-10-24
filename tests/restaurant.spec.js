const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  // it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // Escreva todos os testes aqui.

    const objectTest = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });

    // 1- Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave 
    // fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    it('1- Testa se a função createmenu() retorna um objeto que possui a chave fetchmenu e se o valor da chave fethMenu é uma função', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });

    // 2- 
    it('2- Testa se o objeto retornado por createMenu() retorna um objeto cujas chaves são somente foods e drinks', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('food');
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toHaveProperty('drinks');
  });

    // 3- Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu 
    // recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    it('3- Testa se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função createMenu()', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu());
  });

    // 5- Escreva um teste que verifica se a propriedade consumption do objeto retornado pela 
    // função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    it('5- Testa se a propriedade consumption do objeto retornado pela função createMenu(), após a criação do menu, retorna um array vazio', () => {
    expect(createMenu().consumption).toEqual([]);
  });

    // 7.1- Teste para caso a string exista no objeto passado como parâmetro para createMenu. O item deve ser adicionado ao array consumption.
    it('7.1- Testa para caso a string exista no objeto passado como parâmetro para createMenu. O item deve ser adicionado ao array consumption.', () => {
    expect(objectTest.order('coxinha')).toEqual(['coxinha']);
  });

    // 7.2- Teste para caso a string não exista no objeto passado como parâmetro para createMenu. Deve-se exibir a mensagem 'Item indisponível'.
    it('7.2- Testa para caso a string não exista no objeto passado como parâmetro para createMenu. Deve-se exibir a mensagem "Item indisponível"', () => {
    expect(objectTest.order('picanha')).toBe('Item indisponível');
  });

    // 9- Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array 
    // consumption contém os itens pedidos.
    it('9- Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.', () => {
    expect(objectTest.order('sanduiche')).toEqual(['coxinha', 'sanduiche']);
    expect(objectTest.order('cerveja')).toEqual(['coxinha', 'sanduiche', 'cerveja']);
    // expect(objectTest.order('agua')).toEqual(['sanduiche', 'cerveja', 'agua']);
    // expect(objectTest.consumption).toEqual(['sanduiche', 'cerveja', 'agua']);
  });

    // 10- Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.
    it('10- Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    // expect(objectTest.order('cerveja')).toBe(['cerveja']);
    // expect(objectTest.order('cerveja')).toBe(['cerveja', 'cerveja']);
    // expect(objectTest.order('cerveja')).toBe(['cerveja', 'cerveja', 'cerveja']);
    // expect(objectTest.consumption).toEqual(['cerveja', 'cerveja', 'cerveja']);
  });

    // Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função 
    // createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. 
    // A propriedade pay tem como valor uma função.

    it('11- Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. A propriedade pay tem como valor uma função.', () => {
    // expect(objectTest.order('coxinha', 'sanduiche', 'cerveja')).toEqual(['coxinha', 'sanduiche', 'cerveja']);
    // expect(objectTest.consumption).toBe(['cerveja', 'cerveja', 'cerveja']);
    expect(objectTest.pay()).toBeCloseTo(22.77, 2);
  });
  });

