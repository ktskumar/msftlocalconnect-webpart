import * as React from 'react';
import styles from './Msftlocalconnect.module.scss';
import { IMsftlocalconnectProps } from './IMsftlocalconnectProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Msftlocalconnect extends React.Component<IMsftlocalconnectProps, {}> {
  public render(): React.ReactElement<IMsftlocalconnectProps> {
    return (
      <div className={ styles.msftlocalconnect }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>Azure Devops CI / CD</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
