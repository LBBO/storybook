import type { AnyFramework } from '@storybook/csf';
import type { Loadable } from '@storybook/addons';
import { ClientApi as ClientApiClass } from '@storybook/client-api';
import type { StoryshotsOptions } from '../api/StoryshotsOptions';
import type { SupportedFramework } from './SupportedFramework';

export type RenderTree = (story: any, context?: any, options?: any) => any;

export interface ClientApi<TFramework extends AnyFramework> extends ClientApiClass<AnyFramework> {
  configure(loader: Loadable, module: NodeModule | false, showDeprecationWarning?: boolean): void;
  forceReRender(): void;
}

export interface Loader {
  load: (options: StoryshotsOptions) => {
    framework: SupportedFramework;
    renderTree: RenderTree;
    renderShallowTree: any;
    storybook: ClientApi<AnyFramework>;
  };
  test: (options: StoryshotsOptions) => boolean;
}
