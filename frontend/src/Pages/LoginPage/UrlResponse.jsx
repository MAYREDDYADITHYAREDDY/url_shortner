import { Text, TextInput } from '@mantine/core';
import Service from '../../utils/http';
import { QRCodeSVG } from 'qrcode.react';
import { IconCopy } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';

const obj = new Service();


export default function UrlResponse(props) {
    
    const clipboard = useClipboard();
    const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
    return (
        <div>
            <Text color="blue"> {surl} </Text>
            <TextInput value={surl} rightSection={<IconCopy
                onClick={() => {
                    console.log("clicked");
                    clipboard.copy(surl)
                }}
            />}
            />

            <QRCodeSVG imageSettings={{ excavate: true, width: 50, height: 50 }}size={200} value={surl} />

        </div>
    )
}
