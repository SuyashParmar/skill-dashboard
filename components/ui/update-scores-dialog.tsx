'use client'

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

interface UpdateScoresDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialValues: {
    rank: number
    percentile: number
    currentScore: number
  }
  onSave: (values: {
    rank: number
    percentile: number
    currentScore: number
  }) => void
}

export function UpdateScoresDialog({
  open,
  onOpenChange,
  initialValues,
  onSave,
}: UpdateScoresDialogProps) {
  const [values, setValues] = useState(initialValues)
  const [showerror, setShowError] = useState(true);

  useEffect(() => {
    if (open) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="HTML5 Logo"
              width={24}
              height={24}
            />
            Update scores
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                1
              </div>
              <label htmlFor="rank" className="text-sm">
                Update your Rank
              </label>
            </div>
            <Input
              id="rank"
              type="number"
              value={values.rank}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, rank: Number(e.target.value) }))
              }
            />
            {showerror && <p className="text-red-600 text-sm">required | should be number</p>}

          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                2
              </div>
              <label htmlFor="percentile" className="text-sm">
                Update your Percentile
              </label>
            </div>
            <Input
              id="percentile"
              type="number"
              value={values.percentile}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  percentile: Number(e.target.value),
                }))
              }
            />
            {showerror && <p className="text-red-600 text-sm">required | percentile 0-100</p>}

          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                3
              </div>
              <label htmlFor="currentScore" className="text-sm">
                Update your Current Score (out of 15)
              </label>
            </div>
            <Input
              id="currentScore"
              type="number"
              value={values.currentScore}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  currentScore: Number(e.target.value),
                }))
              }
            />

          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="text-gray-500"
          >
            cancel
          </Button>
          <Button
            onClick={() => {
              onSave(values)
              onOpenChange(false)
            }}
            className="bg-blue-600 text-white"
          >
            save
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}




