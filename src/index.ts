import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jupyterlab-theme-KULeuven extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-KULeuven:plugin',
  autoStart: true,
  requires: [IThemeManager],
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, manager: IThemeManager, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jupyterlab-theme-KULeuven is activated!');
    const style = 'jupyterlab-theme-KULeuven/index.css';

    manager.register({
      name: 'jupyterlab-theme-KULeuven',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jupyterlab-theme-KULeuven settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jupyterlab-theme-KULeuven.', reason);
        });
    }
  }
};

export default plugin;
