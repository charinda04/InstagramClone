import { createNavigationContainerRef, NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

export const navigationRef: NavigationContainerRefWithCurrent<ParamListBase> = createNavigationContainerRef();

export const navigate = (name: string, params: ParamListBase): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
