/**
 * 存储localStorage
 */
 export const setStore = (name: string, content: any) => {
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  try {
    window.localStorage.setItem(name, content)
  } catch (e) {
    console.error(e)
  }
}

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) {
    return
  }

  try {
    return window.localStorage.getItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
  if (!name) {
    return
  }

  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
 * 存储sessionStorage
 */
export const setSessionStore = (name: string, content: any) => {
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  try {
    window.sessionStorage.setItem(name, content)
  } catch (e) {
    console.error(e)
  }
}

/**
 * 获取sessionStorage
 */
export const getSessionStore = (name: any) => {
  if (!name) {
    return
  }

  try {
    return window.sessionStorage.getItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
 * 删除sessionStorage
 */
export const removeSessionStore = (name: any) => {
  if (!name) {
    return
  }

  try {
    window.sessionStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}
