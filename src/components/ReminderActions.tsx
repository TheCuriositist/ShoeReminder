import { Button } from "@/components/ui/button";
import { Calendar, Smartphone } from 'lucide-react';

interface ReminderActionsProps {
    onDownload: () => void;
    googleUrl: string;
}

export function ReminderActions({ onDownload, googleUrl }: ReminderActionsProps) {
    return (
        <div className="space-y-3">
            <Button
                className="w-full font-semibold py-6"
                onClick={onDownload}
            >
                <Smartphone className="mr-2 h-5 w-5" />
                Apple / Outlook / Mobile
            </Button>

            <Button
                variant="outline"
                className="w-full py-6"
                asChild
            >
                <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Add to Google Calendar
                </a>
            </Button>
        </div>
    );
}
