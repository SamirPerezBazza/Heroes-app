import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types';



describe('Pruebas en authReducer', () => {

  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});

    //.toBe is for primitives, .toEqual for objects and more
    expect(state).toEqual({ logged: false });

  });

  test('Debe autenticar y colocar el "name" del usuario', () => {

    const action = {
      type: types.login,
      payload: {
        "name": 'Samir'
      },
    }

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      name: "Samir",
      logged: true
    });

  });

  test('Debe borrar el "name" del usuario y logged en "false"', () => {

    const action = {
      type: types.logout,
    }
    const state = authReducer({ logged: false, name: "Samir" }, action);

    expect(state).toEqual({ logged: false })


  });




})