export function validateContactForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.phone || !/^[+\d\s\-()]{7,20}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}
