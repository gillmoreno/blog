export default function Footer() {
  let date =  new Date().getFullYear();
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <hr class="my-6 border-indigo-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-indigo-400 sm:text-center dark:text-gray-400">© {date} GilBoss™. All Rights Reserved.
        </span>
    </footer>
  )
}