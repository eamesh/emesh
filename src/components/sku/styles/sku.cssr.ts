import { cB, c } from 'naive-ui/lib/_utils/cssr';

// vars:
// --n-border-color
export default cB('card', `
  padding: 14px 10px;
  box-sizing: border-box;
`, [
  cB('group', `
    width: 100%;
  `, [
    cB('group-section', `
      position: relative;
      overflow: hidden;
    `),
    cB('group-section:hover', {}, [
      cB('group-close', `
        transform: translate(0, 0);
      `)
    ]),
    cB('group-close', `
      cursor: pointer;
      transition: all .3s;
      transform: translate(50px, 0);
      display: flex;
      align-items: center;
      position: absolute;
      right: 20px;
    `),
    cB('group-header', `
      background-color: var(--n-border-color);
      padding: 7px 10px;
    `, [
      c('> div', `
        display: flex;
        align-items: center;
      `)
    ]),
    cB('group-body', `
      padding: 0 10px;
    `, [])
  ])
]);
