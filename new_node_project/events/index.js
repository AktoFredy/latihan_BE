const { EventEmitter } = require('events');

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', { name: 'FREDY AKTOSA' });

/**
 * WITHOUT OBJECT PARAMETERS
 * 
 * const { EventEmitter } = require('events');
 * 
 * const birthdayEventListener = (name) => {
 *      console.log(`Happy birthday ${name}!`);
 * }
 * 
 * const myEmitter = new EventEmitter();
 * 
 * myEmitter.on('birthday', birthdayEventListener);
 * 
 * myEmitter.emit('birthday', 'FREDY AKTOSA');
 */