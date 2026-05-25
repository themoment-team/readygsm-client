'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib';

import { Button } from './button';
import { Modal } from './Modal';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'danger' | 'default';
  cancelVariant?: 'outlineDanger' | 'outlinePrimary';
  isPending?: boolean;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  confirmVariant = 'danger',
  cancelVariant = 'outlineDanger',
  isPending = false,
}: ConfirmModalProps) => (
  <Modal isOpen={isOpen} onClose={isPending ? undefined : onClose} className="w-120 px-6 py-5">
    <div className={cn('flex flex-col gap-6')}>
      <div className={cn('flex flex-col gap-2')}>
        <h2 className={cn('text-neutral-dark text-2xl font-semibold')}>{title}</h2>
        {description && <p className={cn('text-secondary-slate text-sm')}>{description}</p>}
      </div>
      <div className={cn('flex justify-end gap-2')}>
        <Button variant={cancelVariant} size="sm" onClick={onClose} disabled={isPending}>
          {cancelText}
        </Button>
        <Button variant={confirmVariant} size="sm" onClick={onConfirm} disabled={isPending}>
          {confirmText}
        </Button>
      </div>
    </div>
  </Modal>
);

export { ConfirmModal };
