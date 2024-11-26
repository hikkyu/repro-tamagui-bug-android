import { Paragraph, YStack, Button } from '@my/ui'
import { Popover } from '@tamagui/popover'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  return (
    <YStack borderColor="red" borderWidth={2} padding={10}>
      <Paragraph>should show text:</Paragraph>
      <Popover defaultOpen>
        <Popover.Trigger asChild>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <YStack>
            <Paragraph>I should have yellow border on web blue border on native</Paragraph>
          </YStack>
        </Popover.Content>
        <Popover.Adapt platform="native">
          <YStack borderColor="blue" borderWidth={2} padding={10}>
            <Popover.Adapt.Contents />
          </YStack>
        </Popover.Adapt>
        <Popover.Adapt platform="web">
          <YStack borderColor="yellow" borderWidth={2} padding={10}>
            <Popover.Adapt.Contents />
          </YStack>
        </Popover.Adapt>
      </Popover>
    </YStack>
  )
}
