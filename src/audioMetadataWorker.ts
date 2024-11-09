import { parseFile } from 'music-metadata';
import { runAsWorker } from 'synckit'

runAsWorker(async (path: string) => {
    return await parseFile(path);
});
