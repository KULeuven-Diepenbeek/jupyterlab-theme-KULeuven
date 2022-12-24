import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_theme_KULeuven extension.
 */
const  extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_theme_KULeuven',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_theme_KULeuven is activated!');
    const style = 'jupyterlab_theme_KULeuven/index.css';

    manager.register({
      name: 'jupyterlab_theme_KULeuven',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension
