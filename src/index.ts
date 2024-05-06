import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-theme-KULeuven extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-KULeuven',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-theme-KULeuven is activated!');
    const style = 'jupyterlab-theme-KULeuven/index.css';

    manager.register({
      name: 'jupyterlab-theme-KULeuven',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};


/**
 * Initialization of a simple metadata form plugin.
 */
const slides: JupyterFrontEndPlugin<void> = {
  id: 'Jupyter_KULeuven_slides:slides',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Jupyter_KULeuven_slides metadata-form example activated');
  }
};

export default [slides,extension];
