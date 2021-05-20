import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import RegLogButton from './Components/RegisterScreen/RegLogButton';
import AppTextInput from './Components/TextInput/AppTextInput';




it('Login screen renders', () => {
    const json = renderer
        .create(<LoginScreen />)
        .toJSON();
    expect(json).toMatchSnapshot();
});

it('Apptext input is rendered', () => {
    const item = renderer.create(<AppTextInput />).toJSON;
    expect(item).toMatchSnapshot();
})

