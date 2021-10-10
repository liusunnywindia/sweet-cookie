interface MenuItem {
  component: string;
  title: string;
}

const menuConfig: Array<MenuItem> = [
  { component: 'cssSkyBox', title: 'css天空盒' },
  { component: 'threeSkyBox', title: 'three制作的天空盒' }
];

export default menuConfig;