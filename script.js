// UI-only stubs. Replace these with real fetch() calls to PHP endpoints
// (e.g. php/login.php, php/register.php, php/resetPassword.php) when you
// wire up authentication.

function showError(message) {
	const el = document.getElementById('errs');
	if (!el) {
		alert(message);
		return;
	}
	el.textContent = message;
	el.classList.add('show');
}

function clearError() {
	const el = document.getElementById('errs');
	if (el) {
		el.textContent = '';
		el.classList.remove('show');
	}
}

function login() {
	clearError();
	const email = (document.getElementById('email') || {}).value || '';
	const password = (document.getElementById('password') || {}).value || '';
	if (!email || !password) {
		showError('Please enter both email and password.');
		return;
	}
	alert('Login is not implemented yet. Wire up php/login.php and replace this stub.');
}

function register() {
	clearError();
	const name = (document.getElementById('name') || {}).value || '';
	const email = (document.getElementById('email') || {}).value || '';
	const password = (document.getElementById('password') || {}).value || '';
	const confirm = (document.getElementById('confirm-password') || {}).value || '';
	if (!name || !email || !password || !confirm) {
		showError('Please fill in all fields.');
		return;
	}
	if (password !== confirm) {
		showError('Passwords do not match.');
		return;
	}
	alert('Registration is not implemented yet. Wire up php/register.php and replace this stub.');
}

function resetPassword() {
	clearError();
	const email = (document.getElementById('email') || {}).value || '';
	if (!email) {
		showError('Please enter your email.');
		return;
	}
	alert('Password reset is not implemented yet. Wire up php/resetPassword.php and replace this stub.');
}
