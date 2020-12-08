import { ComponentType, ReactNode } from 'react';

export interface StaticContainerProps {
  shouldUpdate: boolean;
  children: ReactNode;
}

const StaticContainer: ComponentType<StaticContainerProps>;
type StaticContainer = ComponentType<StaticContainerProps>;

export default StaticContainer;
