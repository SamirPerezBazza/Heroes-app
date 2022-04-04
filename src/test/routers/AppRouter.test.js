import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en <AppRouter />', () => {

  const contextValue = {
    user: {
      logged: false,
    }
  };

  test('debe de mostrar el login si no está autenticado', () => {

    //Montar el componente a través de mount
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    console.log("Wrapper=>", wrapper.html())

  })

})