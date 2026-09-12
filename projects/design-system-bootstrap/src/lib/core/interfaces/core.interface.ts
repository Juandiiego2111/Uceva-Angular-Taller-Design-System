/**
 * Temas visuales disponibles.
 */
export type Themes = 
    | 'primary'
    | 'secondary' 
    | 'success' 
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

/** Tipo de tema para badges */
export type BadgeType = Themes;

/** Tipo de tema para tags */
export type TagType = Themes;

/** Clases de texto disponibles para badges */
export type BadgeTypeText = 'text-white' | 'text-dark';

/** Tipo de tema para botones */
export type ButtonType = Themes;

/**
 * Configuración de un botón dentro de un grupo de botones.
 */
export interface ButtonGroupData {
  /** Identificador único del botón */
  idButton: string;

  /** Tipo visual del botón */
  type: ButtonType;

  /** Texto visible del botón */
  text: string;
}

/**
 * Representa un enlace de navegación.
 */
export interface NavLink {
    /** Texto visible del enlace */
    text: string;
    /** Url asociada al enlace */
    url: string;
}

/**
 * Configuración de la barra de navegación.
 */
export interface NavbarConfig {
  /** Título principal del Navbar */
  title: string;

  /** Configuración del icono del Navbar */
  iconConfig: NavbarIconConfig;

  /** Lista de enlaces de navegación */
  navLinks: NavLink[];
}

/**
 * Configuración del icono de la barra de navegación.
 */
export interface NavbarIconConfig {
    /** Nombre del icono (sin el prefijo `bi-`) */
    icon: string;

    /** Tamaño del icono en unidades `rem` */
    size: number;
}

/** Tamaños disponibles para el componente Avatar. */
export type AvatarSize = 'sm' | 'md' | 'lg';

/**
 * Datos del usuario para el componente UserCard.
 */
export interface UserCardData {
  /** Nombre del usuario a mostrar */
  userName: string;

  /** Rol o cargo del usuario */
  userRole: string;

  /** Url de la imagen de avatar del usuario */
  avatarUrl: string;
}

/**
 * Configuración del Profile Header.
 */
export interface ProfileHeaderConfig {
  /** Nombre del usuario a mostrar */
  userName: string;

  /** Rol o cargo del usuario */
  userRole: string;

  /** Url de la imagen de avatar */
  avatarUrl: string;

  /** Texto placeholder para el campo de búsqueda */
  searchPlaceholder: string;
}