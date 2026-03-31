import { getContacts } from '@/actions/Get_Contact_Action'
import React from 'react'
import { Badge } from './ui/badge';
import { Mail, User, AtSign, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardTitle } from './ui/card';

const Contact_List = async () => {
  const contacts = await getContacts();
  console.log(contacts);

  return (
    <div className="min-h-screen bg-[#0f0f0f] px-8 py-16">

      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10 flex items-end justify-between border-b border-[#2a2a2a] pb-6">
        <div className="flex flex-col gap-2">
          <div className="w-8 h-0.5 bg-[#c8a96e]" />
          <h2 className="font-serif text-3xl font-semibold text-[#e8e2d9] tracking-tight">
            Contact Messages
          </h2>
        </div>
        <Badge className="bg-[#1c1c1c] border border-[#2a2a2a] text-[#c8a96e] text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm font-medium">
          {contacts.length} {contacts.length === 1 ? 'Message' : 'Messages'}
        </Badge>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {contacts.length === 0 ? (

          /* Empty State */
          <Card className="bg-[#161616] border border-[#2a2a2a] rounded-sm">
            <CardContent className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1c1c1c] border border-[#2a2a2a] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#6b6560]" />
              </div>
              <h3 className="font-serif text-lg text-[#6b6560] tracking-wide">
                No messages yet
              </h3>
              <p className="text-xs text-[#3a3835] uppercase tracking-widest">
                Messages will appear here
              </p>
            </CardContent>
          </Card>

        ) : (

          /* Contact Cards */
          <div className="flex flex-col gap-4">
            {contacts.map((contact) => (
              <Card
                key={contact._id}
                className="bg-[#161616] border border-[#2a2a2a] rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-[#3a3835] transition-all duration-300"
              >
                <CardContent className="px-8 py-6 flex flex-col gap-4">

                  {/* Top row: Subject + Status */}
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-serif text-lg font-semibold text-[#e8e2d9] tracking-tight leading-snug">
                      {contact.subject}
                    </CardTitle>
                    <Badge
                      variant={contact.status === 'new' ? 'default' : 'secondary'}
                      className={`shrink-0 text-[0.65rem] uppercase tracking-widest px-2.5 py-1 rounded-sm font-medium ${
                        contact.status === 'new'
                          ? 'bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/30'
                          : 'bg-[#1c1c1c] text-[#6b6560] border border-[#2a2a2a]'
                      }`}
                    >
                      {contact.status}
                    </Badge>
                  </div>

                  {/* Sender info */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[#6b6560]">
                      <User className="w-3.5 h-3.5 text-[#c8a96e]" />
                      <span className="text-sm font-light text-[#e8e2d9]">{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#6b6560]">
                      <AtSign className="w-3.5 h-3.5 text-[#c8a96e]" />
                      <span className="text-sm font-light text-[#e8e2d9]">{contact.email}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#2a2a2a]" />

                  {/* Message */}
                  <div className="flex gap-3">
                    <MessageSquare className="w-3.5 h-3.5 text-[#c8a96e] mt-0.5 shrink-0" />
                    <p className="text-sm font-light text-[#9a9390] leading-relaxed">
                      {contact.message}
                    </p>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

        )}
      </div>
    </div>
  )
}

export default Contact_List