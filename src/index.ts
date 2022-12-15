import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jupyterlab_theme_KULeuven extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_theme_KULeuven:plugin',
  autoStart: true,
  requires: [IThemeManager],
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, manager: IThemeManager, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jupyterlab_theme_KULeuven is activated!');
    const style = 'jupyterlab_theme_KULeuven/index.css';

    manager.register({
      name: 'jupyterlab_theme_KULeuven',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jupyterlab_theme_KULeuven settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jupyterlab_theme_KULeuven.', reason);
        });
    }
  }
};

export default plugin;
