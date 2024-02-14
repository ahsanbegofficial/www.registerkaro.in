<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpressuser' );

/** Database password */
define( 'DB_PASSWORD', 'RegisterKaro@123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('JWT_AUTH_CORS_ENABLE', true);
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'u+=K-@x3VfZ=Jal1.8*#Yvs|N|8sm@!k7M]T19|G<+fJ]S!x]V/L.|+sK/s;;1%(');
define('SECURE_AUTH_KEY',  '-Pj2N}KTX`5xN(=roCpK-=7hQ#rlg++{8me*XT3+?$zA?#RHOBnQ{@-Cp6GhL29g');
define('LOGGED_IN_KEY',    '|?)!~sip$?bWuC;_3aR,oa%[HABk~+CnP9[>iG[B=UcFhAGo.,96&3C0hrYL~B8R');
define('NONCE_KEY',        'g>D+|CJJ&m6[QmXa&Xmsu,1-osSfWXY#S?c*;imZ*T1+#+3e9J}qw4rP0@Gv|U9h');
define('AUTH_SALT',        'B(?iBDZj0Cw>aocl|`)4}D}3|u#F{XG*VL1I1,C>DuH^78<Iab;/G`<zL!=NwQ+f');
define('SECURE_AUTH_SALT', ' e8#IKM+wejiy8Xl@-|V+jox5F(UhAQy.eu^Sio]V,php||A6xL&C;xjH9Dr>$).');
define('LOGGED_IN_SALT',   'tWA.jewFWb_)K9;@/0C.zOUelC,?Cgg~3VL~yp[f.e6OQpX}jwWhf-e){-mKz,x?');
define('NONCE_SALT',       '|Nxuj<o-JC.PZ:yeU+|8eU+z|:}j/v6t+7`V.Cr`|<A4[BpC![5~]<V:Yes%JHQ/');
/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define( 'FS_METHOD', 'direct' );
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
