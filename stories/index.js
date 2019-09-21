import {storiesOf} from '@storybook/html'

storiesOf('Button', module)
.add('with text', () => '<button class="btn">Hello world</button>')
.add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😍⌛'
    return button;
})

.add('jh Button', () => {
    const button = document.createElement('button');
    button.innerText = 'Hola JH'
    return button;
})