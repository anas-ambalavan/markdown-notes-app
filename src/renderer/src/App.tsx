import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'
import { NotePreviewList } from './components/NotePreviewList'

function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList />
        </Sidebar>

        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
