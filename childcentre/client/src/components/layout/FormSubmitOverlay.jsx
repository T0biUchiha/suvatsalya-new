import PropTypes from 'prop-types';

/**
 * Blocks duplicate interaction and shows a spinner while an admin form is submitting.
 */
export function FormSubmitOverlay({ busy, children }) {
  return (
    <div className="relative">
      {busy && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/80 backdrop-blur-[1px]"
          aria-busy="true"
          aria-live="polite"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
          <p className="text-sm font-medium text-gray-700">Saving, please wait…</p>
        </div>
      )}
      {children}
    </div>
  );
}

FormSubmitOverlay.propTypes = {
  busy: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
