export default function Input({
    className,
    placeholder,
    register,
    error={
        type,
        message
    }
  }) 
  {
    return (
      <div className="flex flex-col gap-1">
        <input
          className={`input ${error && "input-error"} ${className}`}
          placeholder={placeholder}
          {...register}
        />
        {error && (
          <span className="text-red-400 block mt-1">{error?.message}</span>
        )}
      </div>
    );
  }