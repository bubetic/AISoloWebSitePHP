<?php
/**
 * SQL connection (PDO).
 *
 * Usage:
 *   require_once __DIR__ . '/db.php';
 *   $pdo  = db();
 *   $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
 *   $stmt->execute([$email]);
 *   $row  = $stmt->fetch();
 */

declare(strict_types=1);

require_once __DIR__ . '/config.php';

function db(): PDO {
	static $pdo = null;
	if ($pdo instanceof PDO) {
		return $pdo;
	}

	$dsn = sprintf(
		'mysql:host=%s;port=%d;dbname=%s;charset=%s',
		DB_HOST,
		DB_PORT,
		DB_DATABASE,
		DB_CHARSET
	);

	$pdo = new PDO($dsn, DB_USERNAME, DB_PASSWORD, [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES   => false,
	]);

	return $pdo;
}
