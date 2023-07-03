import React from 'react';
import SimpsonFamily from './components/SimpsonFamily/SimpsonFamily';
const App = () => {
    return (
        <div>
            <SimpsonFamily name={'Bart'} surname={'Simpson'} age={10} gender={'Male'} photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>;
            <SimpsonFamily name={'Homer'} surname={'Simpson'} age={40} gender={'Male'} photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>;
            <SimpsonFamily name={'Marge'} surname={'Simpson'} age={38} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>;
            <SimpsonFamily name={'Lisa'} surname={'Simpson'} age={10} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>;
            <SimpsonFamily name={'Maggie'} surname={'Simpson'} age={1} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>;
        </div>
    );
};

export default App;
