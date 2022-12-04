//https://adventofcode.com/2022/day/3

//prettier-ignore
const data = ['dWlhclDHdFvDCCDfFq','mGdZBZBwRGjZMFgvTvgtvv','jwwJrzdzGdSbGGnNlzWczHzPHPhn','cczcbMBszhzzDBTBPPPGjtvtlt','LqJLfpwdLnvQLRGQjGtj','gSgnSJJCGSGpGSrwgfhchmmmHzcrHDmbrmMm','bVjstCsSstCLCrbSLnMpdMndcLddcqcpHR','wPZJQJwtBfJZmgBwPTcpTdcnfHMppcGMdG','gmFJzwPJJtszvNhCNC','DmjZDMZWDqGRqqRpHmmRLTTNTPTfCQJQQLJHTClc','FtzfvrfFwVgtzztgBLJNcNlTcTVNNQLN','vgsdbzzrwtqWfWRpZDdZ','rJhqRhLHhdcQqdHqfQGfPGstgGPlWttM','DzCpDDmnNCmBZBZnVBmZzBGPfsbglfNPwgPGPMWsWWft','BZFnlmpBpBzDzVZmhFHFrrrchhRqTdrc','DWCCWFNqdGFdPVcb','HllttQsTRlJlsblrHlhdmPLVcVcTccndLvPLmL','HSlstHgJltghhRrzNBNDzSwMjNZwNb','dzGSHCWSsGVVSdHVHHWWVVDCgJDpQqLTTRJpgmTLRmJTTpTR','BvNjMPZMBtBBMvvNMNttlhLQqCJpLmhTRQqQJgRJLQQg','llNncBlMCwwMnwPZrGsVHzcfFGdHGFGs','JfZhphMMQmFzDTDjSdrQjQ','sqHCbCwBVtbqbCqtrWdjzlSJTlrTSWBn','bHcwbGCGRssNscwtHNbwvmRFvpFFJFvLZMmPLFfv','qBCrzznVmDCmMMDNgrgcrvHHcgbQcW','TTTsdJRTRhhlsgbvbdCFdbWvbQ','JhGGlfRlJsnCMDMqjmfV','rqLLvDLtStDLQhQDQrQhhNdsmWdmmjjnssPnTMnTzfTsWT','ZRFFpgCgppcBcnjTsjTMTfPFMP','GCZpGlwJwBgGHcJhSSHLDDrNqrMtNq','FsPFqsDNZFNnZrcBmWfWWQ','lSnRlRTvgrWtctTmft','SMbGbbvnGlnSDwGqLwNCqNVD','dPQDcBwJJDgDTPgGgQTBVjSsmLhLTrLmjSLpjSLh','MvvZRHtMtbCNvCNCNtNvbRfBSMSrjmLpjnjmVhrVSLsnnmSh','qHZtbBZfRztbHbCzNRHPQgJPJgGgglFPPFqdQD','MsBsVDspRPfPlhMl','zWnCFzHbSCwqNmPSjmGlsmfN','FnHnFbFzsHHCCgzCzbBptVppgvvVgVrpBrJt','pTLntptZjQLfVDjQTDlVJCSWNCPSCCsSNmFlNslm','BBHbqGHHqgwSWSCCWwZWWZ','qRzbhhbzzrHdRRHhRHvzZjfrVTrppVQttDfcQTfp','DHsdHPHHsHMsRmhMZZQBtljgZGtC','NFnCbFznLVJbVrjhQthjGBLZBjGL','wNrfFJJbCpNnfbdwDSDHsvsHmsmH','jLZRjnMMjJhJnvtQbdHfHZbvHQ','mBzwptCWlcFCwsHSTpQfQHQfrpTb','mNltzmsCNmFzGwCBllGRgRgqjgLMnGqjnPjV','ZqqcqmVVtbcBMFfFMcQfgphJ','HLWLDvWjjLwTWzzvGLThQQshQllgJDJgfbffJQ','vHzLvrwwzGzTRGzzLLRPRwRdSVdnBBdSbBSVStbNmnrmZS','TWVVvPSgwWSqcRgRwbRRcqshsfFzzzChTGNHzHhhhCsG','njZrjMLlpmDmGfSGtrNttzCF','ZQBmZdDBZRRPRSBgcb','TpntvdpnZDptnbnTDGtSFSlFmzCzzmSFRjqlZj','MWrNcWRMlgqzMjzq','NPwsPNrBNcVHNNcJHBNBcJwwttDvGVnDptVRtbnTtGvVGtGG','tsbbvvSfnqvzQLLBjfMLdd','gJRmRNmJNchgmmrFJhFgWJQMwBnjwrMBVQwQTBdLdVQj','GcGpGGRGJgqstvpbnCqb','rsHcrbZHBTTtLtNSwwHLLJ','mFqhWVsjsVCjQlNJGMwMlMMGMh','QggzffQRCfgVFWzzCQffqfZpZDcRvTTBTvvZnsdnddcn','bPFMFFBpMlFfMZMpHGNSrNctJcPSSchJchPt','zCgwnmgzQDnQgdWWQRgqSrqLSqSgssLNJhgJ','rQCQQTrRRmDBFfbHBFHZbT','fzfPQsGrrMMjtHtBHs','SwNNDqwhWpVTwbDGGDmwSVhZRZHdbCtgBjCRjMtbBHtRMd','vVTGvVGNvPPvQvfncJ','cwzMJbclHDPqfJQPfq','rrqjjTBrqqBjRCgTjrRjNrsGPDhDFGCfWGfPFfFPGWfD','BZTTSTZgjbSwVptvpq','PPPPJpvpJsJwPHHPsJdTNZRZZZjTFFmRRRNjZd','qbWVfChDCDnVVDGfnSFNNjRLmNfBNLQjLjmBRm','DhFDhbnWCDhGcbJPPwrsrMwrvlvc','lFSDTwHTSwlTNwFFlwNcFFpjLZvZqvnqLPnnWbgngbbncqbZ','rzQfMzRGrRGJCffBMGdGsJZWWnqWVqdPPgNvvVZWPWWn','RJrttBtNQCsNzTpShhHFDwFlth','QNzQFjNFrQPNbmPpqTTDGswWmB','ggHRcSlcCVCSzMVqDGwgqTWpsmqwqG','cltzCZtLClHRRtMZZLQjfNvtrJfhvrddvNNd','mcfWHffBFnQRQlTFdv','wssSLVbbzDVbzbggzSzNshNMnvnljRdvQRlMBjvQdnCj','bhDzVSSJDDJhDLBwtbDzzbbWppfpcmWGmprqqGtqprcHPp','rpVFrZpgHWSZrFPqhzwcqPwmcVBD','vMTnQJjQLCbljvvQzTMbTjPNdBLwwDhmhNNqPwmmhhBh','jvGjjQJnrspGHgFz','sjssjtZlcphZHwWvcrHTwWJH','qDdzzrFNNNDGdFDzzVBVVvfWJPfgPmgWPgvwVH','nqMQGDrnLGnqqLNqjtCZZjsMhZhCMbtl','JJJsLFmzsrFlSpzPscjgHhnRnmvcjqRvvj','fCMQbCbTjjqTGhjc','bfdbWdCddfBbtCfbfbqVWQQpPlBrJLJJSSLwppFssFzLzp','pdbbzlffWtJbgQwhcphQcCCg','vHvLFvVLvSfFRLnRFRNHjPjggcssQcjjsnwhsPCC','vGVGGFFVHLTvDRHDmBbTzfZWMdJZlfMm','wjCbjQgjTQhNNzgWQCWrDFMZmZDZDCrrMDpLpL','czGSPznnRGGJGGlVVRVBGGlBmDDcMDFDDZLqfffZFrrZqFpZ','JPGlvBSJHVGnVsjvQjjzwdwjzd','MFlWQHDTpnpsFNNQllWFWlhzjGgrgDzGGhGGjvmZDZrh','PtTPcTLbBCVPTRVcvhjmmhVhSZGGgvZg','JLPfCwPbTbBPJCfblplMpqWsMpMwWHQn','QbHVBBzWtzHBNtBwQSgqhqSbFgRLjhmqqj','ZnCnMcdsDnJTncggFJwRmSwgRFmL','sTMZpGDvsZcMpcvTCPHwzrfzrpzHpWBrWz','PMdJWwJWHFWJnNzbDlfbCfMvbl','rZgttrFptFFcBtccbbCDvgfbGCGGgGDz','QsZBmsrFscrVrjQJjJQRJWWLwq','GwNNJwwRThwrWfhh','SmQqmzsjHssQzCbvsmSSzsQTjWpFTTfFfThchhFTBBfppB','mmbHbmtmCzzQZzQRdZJhNMdMlRMglh','rrsPbncQvvgnnrTdGDVcCdpZHHZp','RwwwhjLLqtJFwjzwtwmwwGpDZVdGDVdZBZDFHdHZCp','zhzwLhhfffLtjNChgWbbrbnMvPrMrrfv','tQMtQtTSBFtSmQSttMggMtbtnTnPrZvrnzNNTGZvrZZdLdnL','HqhwDpDcwlHqpVrrFzvFGpZrrzrP','RwlhhjwRCjVfjDbMtFWBWJMgWjWm','WpWVlWzsGlBJpspNclNlhhhmgzrdtzQMQttzMmtt','RfnPRLTPDHRdPbwvvntnSrFgmvnmtm','CwqRDCCwqCwbCTqJcJBNcZqdVcBlpJ','tpfnNBsGGNRppRCgfgRRCRQJGMPPWdwMJdWFFwjVzGPJ','chLSchLTbLqvqcZLlvvLqbmldMzFFWdzVSFWFMzQVJwjQjdM','rLqqcjDrcvhRsDfHDtNNnN','DjZjvTTDqrtTZZSMcdRdmRJrcJNc','HWgPGVhFPgnSVtnJcdMs','FPLfBwCWGPfCwfLHCCDBZlbDpBjvqTtDzzDj','FJNqNFgNFssqGGqBsTlMVcgVrCwLwlhcrw','fRZzDmDZvvDdZbtdpDZmbrThrLMCvcChwwlSTrvMSr','zmfZmtZmpDmbfWRDDZdqFljqnNQjGWnsjFqGsG','rMdMWddmJmvdSdmWfWMddpVRqRFVHRRqMRRPQMRqRq','tDGtGGhLjLLZNLjjNgNthGtqHTVqRVVpPDRpHHVRQVRPPR','ZlLtzNjgsZZlssLgtjNpfWfJvlJrrvCJfBmBfn','hqpWvFJsJFNHhqMWNhWvWRmmDcDMLcwZnjcwnjRnjn','LdrlgCCrSSTrTnwRjmwRQZwdwG','PVlfClrLlLlfggtBPzHHhHFbWzJNbvqJFNqF','TbbQtnDtbGGjGlGsGHpJJmFWFJJrBWWFlWrS','CZzzNzzhddNchhMhhRVjpCBwBrCvJvpmSCvrwJ','fhZZhddRjRgZzMZRzPjPTsLGQtHLTHTbDPQTtqPT','nHnWsQNQQWTWQshwjBJJJmHwFBwm','VZZpfbffZVvbSbGfBhSwmtmmJlmjJFJJ','bpphpMfMvMzDbMGZgQNrrngzdTsNqWdd','VPNddVTPPmdnVcPVZcdTmcDbQTFjMpjtFzbMtFjzsFTssT','lJCllWCrgvRlgwlJfRRvSzjSjQpbzMHpbwMQpszM','fRhGBBJJCgrNLsNPNVVhNq','pLrVDgbNbjVplpsltHBqWSqhSQcHDttH','MCdCwCGTmnTmmmvTTCwCqNhHQhRWcwHWBRHSqSQH','TNTFFPfffTvFTJvTPCPTFfGdzVjspVLZglJbsbZpVblrzjlb','cdPzFrldgcdCrnlznPzrBNRssLLBbVNVZsLHRHdm','wTQQwvvtqwqcGvTZmVHBbVLLBbRV','GWJSGfJWcjQwhQQWjqJhhGfgpMnMzDnpMlPpMnDlMrzl','pMhqTTsSpdBPpNBshsdMMTQFvFlQtQWCRQlCllVFqVqG','dfcbnmrnjzRFvGQQGvfv','mDrjLLLcJjLhpZSSJMdpph','NGZNwqFqZhhcFSCfRzwdzRfCzVRw','QTTmBTsWQWJPPCvzvpHPzdvVFR','bsmWTBbQDbmbLQQMsWWQchgqLqhGGGGZLhSFjhqS','HgmGlgsvBBDgBGCdHHvHwCGwhZJWhTjSdhTSFFFhJtSJTJhT','RQfVrfQNszMQfpMzpNnfLbtjhtSbWJWFWtFFtFJtFSZq','PNzLfnLnBCPHgsgC','mTZGgCdNSNmCQLLpPnDhRlGhpV','vWJHWFsfHMWBBFbBsjfjHrFfLRRLPPnpLthttRVPLSnhSPbS','fzMrBjWfBrzsZCZmSTgQzcNN','mgmCZCMgmnZmZgBZpgpJfbQfwSQPDTdfdwSDfwhn','sHhcrWLcFlzHcHRNNFvNFcFPwDDTWdddDdqWbSTWDPTTQS','RNsslsRrNcRNvNRFFNvVsghZBJtVCCtCtGghjhGBGG','gchrcRRdnRwPPnvQ','CVCCSrDjFHjVDbBLFGGBSvwnwNMnMsPPNsNPvwPQVM','lHLCTHGDCbbjFTTzdWlpcqfgcrdzZg','fRDPsDsqqJttttJSzPDgJWQCbQQbGMWCCnGGPVGVQQ','rTTBvZhrvBnWWDWCbZWW','cwLlTLpjTwBFLLhgfRRfmRqRDmRdjq','sprGGPTrJTsGPzszqGzNtTtpfbQddQSQSDFDFvvbZvwFbbfN','LWWCMVmwMmgWFQfFDDvZDgdF','mlMmRVCWVMmmHRjVCmjHWRhMzpTtlrlPzrtzwlsGPrpwtrJp','tsfwwfjfdfrtrClfvwvvLnTHNmvLHcNccRNcvNWH','qQSqZqFQRBzghDFncHgmccHNmWcNmM','SQJphFJzRDSsdpVlllrCrw','vGQqLQFvBvLvdNnvjnvNDc','TRJwmWmZWlCCmzznbNhhbDhRgj','CCTtDTlmDTWTmDmZZlVLLsFfstfFFLsBLQfF','cfWflMmWWlWfPWBhBlQtLmmvrrrvCLjvRTjLLwwr','gSgbsbgHdsjzHbqbdVDLZLvTZwLTvSrZrFvZLw','sdbJqDNdjJNdsJBpBWpJlMcfcB','FHlMHPqDLlPctgHSnttCSC','zhrmBrTwJTjBmQcSQvQqbtwGvg','jBjmBmJjjjRZTBzhhrBJLDdZqfpDMdfWWlDDLMlV','zPVdbsBzZdwqJGhrLTvNNJqH','tmmCgCPCDDnptHDjNvGvhrDvLv','pRWRlpSpPllClnpbQVQwFFVSQFVBZz','nDrCvmvMnMSmsCvblBzzCZplbJlTbZ','FNRtFWRfcGqFGQbzlZTQqQTBbd','GRwFfNtwFRNFGMvBsnnwMMMBjn','LVTBjjlJCDrnJzJNQR','GsGGsggGpfhgpchgdqzbMzzhzQRnnMRrNzzR','PwWFqFGpwWpdWgfsGggdmjCVHPHlCCCVZNCjVmVj','qVTsCWwbCsPlCVfcbvfPDgLzbzDDhrzRrjgZghgr','ntmHmNpSQNGtntNttmSdSdBdjrrDLQZQLLhRrFFFRDTFZhDF','mtMtBNTSNBpNJStMGSdHppNcVWPsWvqVcsVJfwwqlqWqlc','vvWzLvvdpZDvhTpcrLcTTLpdwSPnCfJwCMnQSMwSnCGJrnwr','ttHVmVNNsHBBRsHbMMwwnjnjBfjJwCMP','tsVllgNVqbRlfplldDvDWT','mLjLsQqLQqsBRvvlRBLRlT','bhgtDDhCtmptmTTS','nfmdbggwGWrfsPzfWq','JpWDcSGJpGzsHPSSlbbd','wVRqVZwwRwPDwbDddH','VtVVVLthLVtVgfQLRTNtqDcCcJBmmWMWWprpFrcBJWNp','dhhhDtmLdttdPlslGlRFjfzBBpzzRpGJ','QMrVMwbVrrbvVVCrvcnqQQrrSMBJfpjFSzfjJFMFRWSpjjFG','cwvbHHbCqVchRDHgDsPTdt','CgVNCtDsDtJGZZGqMMGhDq','cLRnSHgWcRdLHWSSRLjQdlHBTTPcPwwhzqzTMBPTwhPPwP','HnnnglnWWgdRjlmQNsNFmJCFJFvsJsNN','hfccLbjhfSRbfDZjFRJzrlvlwwlnnFrWwzqr','TCsPLNtQdpdQQVtVNvJNJWlzJzwlrvJl','pHtPsPtPtCQfbRHHDHhMLh','nWRWgLtWnfTcZNNsscfd','JMGzMVJwMVTvzVQFGHMMmPdddsPsCjldlHPcScNPsP','vGrMQQmmvTQzMJpghWRWgpbbBqLbLR','WSbhFbPTpRfTfPdhpfbhSbfPQLzlQlzlHvtQsvlltlsgHdgQ','pZcGJDZNGcVrJwrDrrnvtNvlNzsgtgzvvsgt','qmJZZJcBqwrMJcVbWfSPPWpmpjmSCF','jHVjjCcpNrDgjsfB','ndqllRvJQtqlQQTRWllFNDrsMZBfDBLvNMNDfsbZ','qTFnWJqdWRdqWRlnTRnQGnTmwwSHCzpcGNmHNcPVcHGmCz','pZCpBhDfvgBVZQGMMVZVlq','sLsLTTSssjPnTNbFGRGFPVHqMMRF','TsNSccnjLdcsLjdmjWvWvBhfmvWpCGhGhD','VWFFFPMpPVSMbTppHTnHTbRH','DtvfNdBNddDNSLjsvDTTHnzzHwrTrwsrwqbT','dgBLNffdgjjtfBQSvgNjNDlvMcQJmJJmZCMmVVVZFPFcPMGG','VWsQLHMVVSNRShWLhNSNLjbbbddbpDZDddcbZdDRztpd','FPlhhgPvThGFJndnnCCnJzzdCp','qrTfmllGvfvGqwNMMMsffsQsNh','NsmFqNlmnQRbCFsmJgSffpPcbvSfrVvpgS','LhZGDZhhwtDHMwDdHGhDjDpTzzPdzgTvcPvpSSpPrdrv','jgHMjBLhwtZMHMHmJNNJNFlBqlBJNn','bznSQggscgMcSTTfJbSQzQFwClMhmCmthClvMwFLwhZL','BRWBPBVVPjPNVHpVqlqrvtwFqmmLqltZmL','WDVddNHNvRgccgsDsgbT','sNgnQLtLLLPPnsPpqdqjBclpGWjcWjBG','rVCChSZhVrrwqVDVHSHmMjldGfJGfHddJGJlfGjGJj','CVZmDvZCmmhFVVrCgTNbbnQFgbsqNqNQ','WmMmSSfJNRRPfJRMRMtllCgdStgbgttgCdDd','QGBrvzwBczlgqCtDbvDq','QQpBGFrLQjQzGVVRNjPmNNWMbW','gGljnJhnJtllpNVCHWcccdTdjdmB','bLfSQDSMSHmBnwCB','LFMDrbFfFQZQRzLZnbgtlsRGtltpgNhgPpPG','cRThZZchCThtgTRhZTRtjWFjWNwqCjGmwFjqqffC','DPDPGzPMHDbrpqjfwrjqmjmp','JVHHDdVdVbvGMdnVdQVdDbHcRZllhRtgStRLThRSTcBTvc','lQWPSBrrPZGgPglGssDfHnWsfDFHHvHh','TDCqpttptJNLtwNpbwTqzqHshsvsMMFnmHMNfssmvmvf','JCjqVpDtrBjQjrlj','wFGWGpFLvCczNSWWsz','tlfgtftjlbtHHlDBsBzmQQnsQDQsCn','gjfrsVqVgPlfqhvLdvdwZhGq','pHpZHBSvRvRCBBZCTMngRnWndnRmWcgg','jsfrfrjJFDwDDMMggMCGWGcfmG','qbCszCjtCjQsQrtZVBHBHvBvqLZvlp','scFzsPScNgNPNgQzpttlCBCwpLrMLCrDdljLwq','TjfGZZjVwMZwMLwr','vnGbWTvTmFRjQFQPsb','bVLrzqrzJVgJbbtVrWJVgppcBCzBvdzwBCCBHDcBvc','hflPQnMQmQSRlQMPNRTHwwHHHqpHpdfwdBCp','hFhZMhqSNMNbrZgWWGWJjZ','NJsgNjJlMHQrwnRgSRPwrP','tqpQtTFpFvbGpzTTWSrnSbrhwChCnRfrCf','GtcvGqQpttzcqdFzWppDsZMJjBBsBJcBNmBjMsLJ','lGfZGZhFfhdSWqmFFWSS','wDRDPLcDnjtWbSmqrSCSLC','MPwmtVnVMjztznHPgQhQfJfvvHHGggQZ','llTspLllCHmLHHndldqHdlLQQPSBQczZSFDDQZSNGcGG','jMhwvVrRjbRhFBZNGPcGNN','wVtrrtRwrfrwftjVjwWvMrRpsqsnsHsBglslCmTsdWdHTd','vPvmTGgDPRvGpDPGPqGHQnWJQJMBBzJBlBQWlHWl','bfbwNsmwFdLjbfrrLsSfLNQtMllznBzJQZMQtMlZZnnF','frssSscssNfScCjfSCwjsDmRDpGmDRDvvvVcvRDvRp','LtlPZPjBTbWsWJVJVzdT','nnprqhrqmzfrSrphqfCChVVGVDJWgSHHWgWsRDVHWd','nrmppNqhcCrfMchcMCncqbzPZvlvlwbBNjPjtNjZjL','FPWsFdSspVbbbtWVvl','CCHnnfHHvCwtVMhzlzDllC','LrGnjGfgfvcwfgrLrBjrBLgwdBTSRBFsRZdRsSqFFSFSSPPp','whGCLqsrjgGhhGFqrCCFGCGzTRTZJcNnzlLTnznNHcnzTH','ddvVmbfvdvVbDVQdvvdSzpNcnJzlzSRHNJpnJcSc','BPdvfQdWtPDDPfDvDQVVPmbhssCGGMqgFCFMqGMWgMjrRw','PSLbGmWPSPLQbMTPWGFWltthdDdrmBDHhdDdczzDRh','VfCngVfgsZwCftrZdhcZrdNDzz','CjVJJJqnJwQhWPPLQlGj','ntnnQmTQTQGVWGNGNNlClG','jDffjMSvqjHzHHzwNVwNVcCddPVNdD','ZszJsrrZMjsHqqvZJLRQCbTRQbJmThbt','BgLHgFDsJNWgQgflWd','mnVVcCHnCGRcVnZSjmlthftMQddlfhQctNfW','qbSGqmHSTFprvpvTTL','dvdTMvvpdLpTcSLvdLLMmhfFBftwCNhRwRNjtCTRCf','lshQWgsgrHHqlFfRqFjRFfFwCB','rsgHQbJbrsGHHlgQHgJrlHrPZdhdpMZGDSDpdPLcZhdvhZ'];
//prettier-ignore
const testData = ['vJrwpWtwJgWrhcsFMMfFFhFp','jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL','PmmdzqPrVvPwwTWBwg','wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn','ttgJtRGJQctTZtZT','CrZsJsPPZsGzwwsLwLmpwMDw'];

let prioritiesSumP1 = 0;

/**
 * @dev Checks if char is upper or lower case, assumes char === [A-Za-z]
 * @param {string} char
 * @returns bool
 */
function _isUpper(char) {
    return /[A-Z]/.test(char);
}

/**
 * @dev Splits a string in half, returns an object with both halfs
 * @param {string} str
 * @returns
 */
function _splitInHalf(str) {
    const halfLength = Math.ceil(str.length / 2);
    return {
        firstHalf: str.slice(0, halfLength),
        secondHalf: str.slice(halfLength),
    };
}

/**
 * @dev Find the first common char between both strings
 * @param {string} str1
 * @param {string} str2
 */
function _findCommonChar(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) return str1[i];
    }
}

/**
 * @dev Returns the priority of a char (according to the puzzle)
 * @param {char} char
 * @returns int, priority for the given char
 */
function _whatPriority(char) {
    const ascii_a = 97;
    const ascii_A = 65;
    const puzzle_a = 1;
    const puzzle_A = 27;

    const asciiValue = char.charCodeAt();

    return _isUpper(char)
        ? asciiValue - ascii_A + puzzle_A
        : asciiValue - ascii_a + puzzle_a;
}

// Problem 1

data.forEach((str) => {
    const { firstHalf, secondHalf } = _splitInHalf(str);
    const commonChar = _findCommonChar(firstHalf, secondHalf);
    prioritiesSumP1 += _whatPriority(commonChar);
});

console.log(`Problem 1 solution: ${prioritiesSumP1}`);

// Problem 2
