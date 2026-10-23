export default async () => {
  const hook = process.env.NETLIFY_BUILD_HOOK

  if (!hook) {
    throw new Error('NETLIFY_BUILD_HOOK is missing')
  }

  const response = await fetch(hook, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Build hook failed: ${response.status}`)
  }
}

export const config = {
  schedule: '0 8 21 * *',
}
