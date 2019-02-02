import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MsftlocalconnectWebPartStrings';
import Msftlocalconnect from './components/Msftlocalconnect';
import { IMsftlocalconnectProps } from './components/IMsftlocalconnectProps';

export interface IMsftlocalconnectWebPartProps {
  description: string;
}

export default class MsftlocalconnectWebPart extends BaseClientSideWebPart<IMsftlocalconnectWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMsftlocalconnectProps > = React.createElement(
      Msftlocalconnect,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
