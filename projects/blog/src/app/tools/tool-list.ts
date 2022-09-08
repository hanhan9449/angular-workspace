export interface ToolListItemInterface {
  name: string;
  routerLink: string;
}

export const toolList: ToolListItemInterface[] = [
  {
    name: '二维码工具',
    routerLink: 'qr-code'
  }
]
