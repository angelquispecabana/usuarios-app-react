import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';

const SignupSchema = yup.object().shape({
    firstName: yup.string()
        .min(5, 'Minimo 5 de caracteres')
        .max(20, 'Maximo 20 de caracteres')
        .required('El campo Nombres es requerido'),
    lastName: yup.string()
        .min(5, 'Minimo 5 de caracteres')
        .max(20, 'Maximo 20 de caracteres')
        .required('El campo Apellidos es requerido'),
    email: yup.string()
        .email('La estructura del Email no es correcto')
        .required('El campo Email es requerido'),
    role: yup.string()
        .required('El campo Cargo es requerido')
});

const UsuarioForm = ({onSubmit, onCancel, user}) => {
    const { handleSubmit, errors, touched, isValid, values, handleChange, handleBlur } = useFormik({
        initialValues: {
            firstName: '' || user.firstName,
            lastName: '' || user.lastName,
            email: '' || user.email,
            role: '' || user.role,
        },
        onSubmit: (values) => {
            onSubmit(values)
        },
        validationSchema: SignupSchema
    });
    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Nombres</label>
                <div className="control">
                    <input className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.firstName && touched.firstName,
                                        'is-succes': !errors.firstName && touched.firstName
                                    }
                                )
                            }
                        type="text" 
                        name="firstName" 
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Ingrese Nombres"/>                    
                </div>
                {errors.firstName && touched.firstName ? (<p className='help is-danger'>{errors.firstName}</p> ): null}
            </div>
            <div className="field">
                <label className="label">Apellidos</label>
                <div className="control">
                    <input className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.lastName && touched.lastName,
                                        'is-succes': !errors.lastName && touched.lastName
                                    }
                                )
                            }
                        type="text" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Ingrese Apellidos"/>                    
                </div>
                {errors.lastName && touched.lastName ? (<p className='help is-danger'>{errors.lastName}</p> ): null}
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.email && touched.email,
                                        'is-succes': !errors.email && touched.email
                                    }
                                )
                            }
                        type="text" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Ingrese Email"/>                    
                </div>
                {errors.email && touched.email ? (<p className='help is-danger'>{errors.email}</p> ): null}
            </div>
            <div className="field">
                <label className="label">Cargo</label>
                <div className="control">
                    <input className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.role && touched.role,
                                        'is-succes': !errors.role && touched.role
                                    }
                                )
                            }
                        type="text" 
                        name="role" 
                        value={values.role}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        placeholder="Ingrese Cargo"/>                    
                </div>
                {errors.role && touched.role ? (<p className='help is-danger'>{errors.role}</p> ): null}
            </div>
            <div className="field is-grouped">
					<div className="control">
						<button
                            type="submit"
							className="button is-link"
                            disabled={!isValid}
                            onClick={onSubmit}
						>
							Guardar
						</button>
					</div>
					<div className="control">
                        <button 
                            type="button"
                            className="button is-link is-light" onClick={onCancel}>
							Cancelar
						</button>
					</div>
				</div>
        </form>
    )
}

export default UsuarioForm;