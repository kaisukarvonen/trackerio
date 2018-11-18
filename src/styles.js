import { css } from 'styled-components';

// #535162, #605a69, #6c6370
//background-image: linear-gradient(to bottom, #384154, #434759, #4d4d5f, #575364, #605a69);
//background-image: linear-gradient(to bottom, #384154, #434759, #4d4d5f, #575364, #605a69);
export const gradients = ['#384154', '#3e4154', '#404356', '#434759', '#4d4d5f', '#535162', '#605a69', '#6c6370'];
export const colors = { darkBackground: '#384154', background: '#49536A', primary: '#F49D6E', lightGray: '#bbb4bd', orange: '#bf957e' };

export const headerStyles = {
  headerTitleStyle: { paddingStart: 67, fontFamily: 'AvenirMedium', fontWeight: '200', fontSize: 22 },
  headerStyle: { backgroundColor: colors.darkBackground, elevation: 0 },
  headerTintColor: colors.primary
};

export const tabBarOptions = {
  labelStyle: { fontFamily: 'AvenirMedium', fontSize: 13 },
  activeTintColor: '#eee',
  inactiveTintColor: colors.lightGray,
  style: { backgroundColor: gradients[gradients.length - 1], elevation: 0, borderTopWidth: 0 }
};

export const mainContainer = css`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
`;

// '#49536A', '#4c546d', '#6D697C', '#988d9c', '#B2A8AF'
