import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';

export * from './Input';
export * from './Error';

function _Form({
  className,
  defaultValues,
  children,
  onSubmit,
  validationSchema,
}) {
  const methods = useForm({ defaultValues, validationSchema });
  const { handleSubmit } = methods;

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            const isError = /error/gi.test(child.type.displayName);
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    errors: methods.errors,
                    key: isError
                      ? `${child.props.name}-error`
                      : child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}

export const Form = styled(_Form)``;
