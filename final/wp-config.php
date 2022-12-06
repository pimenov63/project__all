<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'education__site' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':o(RoOLgh#_>VKs9AKlp7=8:B`w@NWm<FP!J0 |FU|A]7_R*MQj{m2Ba,Hu]R>@D' );
define( 'SECURE_AUTH_KEY',  '-iT~T*CMh5jSRE6;8ydVG;@N^4%1 o_>8kI&sP1?V@W%x7Mc*gk0I6V.!T#[;Ga,' );
define( 'LOGGED_IN_KEY',    'o6x|4@*!P=x;3{]($+l3n^AAzW(0bV^I$JZ3IuZ8 TN3he=4,gB:cwPymCY[3e)-' );
define( 'NONCE_KEY',        '9f)I-VWMqmnndAEtUmm~fNhAX]7R-4`s!Ouk?8#e^Z5z3[FCa]tULint;AH_RIiG' );
define( 'AUTH_SALT',        'L1.#]-JcI;PV~bZ}SRWw0x<V)|-kd6%b{cnr[e#y&eK*I^TXVRbd5xSHq<h/rnUu' );
define( 'SECURE_AUTH_SALT', '&y9:fH({Up/zmysER6Y&IZo{GG*.-eJ-/T~D,dBz%6%-q .5EKP&FvT1#x9x|@O@' );
define( 'LOGGED_IN_SALT',   '=oQFXa<dRdnRr~EL0XiX(CxVPNY*$pW087wEQ=QxxW`MgvT}i.frECC9Q^Zi@@~w' );
define( 'NONCE_SALT',       '1;xt8dU~CI!J-o^Ul4<>HCe};Py:`+Ch{Ow(C.nZ0`{bN:D7OE{s?L[<Vj~Pd#Kt' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
