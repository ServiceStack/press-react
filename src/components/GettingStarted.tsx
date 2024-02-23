import { ChangeEvent, useMemo, useState } from "react"
import ShellCommand from "./ShellCommand"
import { Icon } from "@iconify/react"

type Props = {
    template: string
}

export default ({ template }: Props) => {
    let defaultValue = 'ProjectName'
    let [project, setProject] = useState(defaultValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setProject(e.target.value);

    const zipUrl = (template: string) =>
        `https://account.servicestack.net/archive/${template}?Name=${project || 'MyApp'}`
    const projectZip = useMemo(() => (project || 'MyApp') + '.zip', [project])

    function validateSafeName(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key.match(/[\W]+/g)) {
            e.preventDefault()
            return false
        }
    }

    return (<div className="flex flex-col w-96">
        <h4 className="py-6 text-center text-xl">Download New Project</h4>

        <input type="text" onChange={handleChange} defaultValue={defaultValue} autoComplete="off" spellCheck="false" onKeyDown={validateSafeName}
            className="mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800" />

        <section className="w-full flex justify-center text-center">
            <div className="mb-2">
                <div className="flex justify-center text-center">
                    <a className="archive-url hover:no-underline" href={zipUrl(`ServiceStack/${template}`)}>
                        <div className="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600"
                            style={{ minWidth: '150px' }}>
                            <div className="text-center font-extrabold flex items-center justify-center mb-2">
                                <div className="text-4xl text-blue-400 my-3">
                                    <Icon icon="logos:react" className="w-12 h-12" />
                                </div>
                            </div>
                            <div className="text-xl font-medium text-gray-700 dark:text-gray-300">React SPA</div>
                            <div className="flex justify-center h-8"></div>
                            <span className="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{projectZip}</span>
                            <div className="count mt-1 text-gray-400 text-sm"></div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <h4 className="pb-4 text-center text-xl">or</h4>
        <ShellCommand className="mb-2">npx degit ServiceStack/press-react</ShellCommand>

        <h4 className="py-4 text-center text-xl">or</h4>

        <div className="mx-auto">
            <a href="https://stackblitz.com/github/ServiceStack/press-react">
                <img alt="Open in StackBlitz" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" />
            </a>
        </div>

        <h4 className="py-6 text-center text-xl">Run</h4>
        <ShellCommand className="mb-2">npm install</ShellCommand>
        <ShellCommand className="mb-2">npm run dev</ShellCommand>
    </div>)
}
