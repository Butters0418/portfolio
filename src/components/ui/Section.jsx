import { useFadeIn } from '../../hooks/useFadeIn'

export default function Section({ children, className = '' }) {
  const { ref, visible } = useFadeIn()

  return (
    <section
      ref={ref}
      className={`flex flex-col gap-6 py-6 border-t border-divider transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </section>
  )
}
