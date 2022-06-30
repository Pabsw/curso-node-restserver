const Role = require('../models/role');
//const Correo = require('../models/correo');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol='') => {
    
    const existeRol = await Role.findOne({rol});

    if ( !existeRol ) {
        throw new Error(`El rol ${rol} no está registrado en la base de datos`);
    }
}

const emailExiste = async(correo='') =>{
   
    //Verifica si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){        
            throw new Error(`El mail: ${correo} ya está registrado`)

    }

}

const existeUsuarioPorId = async(id='') =>{
   
    //Verifica si el id existe
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){        
            throw new Error(`El id: ${id} no existe`)

    }

}

    

module.exports = { esRoleValido, emailExiste,existeUsuarioPorId }