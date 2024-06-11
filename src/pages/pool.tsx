import { useParams } from "react-router-dom";
import { AddLiquidity } from "src/components/pool/AddLiquidity";
import { RemoveLiquidity } from "src/components/pool/RemoveLiquidity";
import { Skeleton } from "src/components/ui/Skeleton";
import { usePool } from "src/hooks/pool/usePool";

const PoolPage = () => {
    const { pool: poolAddress } = useParams();

    const pool = usePool(poolAddress);

    const jetton0 = pool?.token0;
    const jetton1 = pool?.token1;

    if (!pool || !jetton0 || !jetton1) {
        return (
            <div className="flex flex-col gap-6 py-20">
                <Skeleton className="w-64 h-10 mr-auto  animate-pulse" />
                <Skeleton className="w-80 h-16" />
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-6 py-20 animate-fade-in">
            <h2 className="text-3xl mr-auto">
                {jetton0?.symbol} / {jetton1?.symbol}
            </h2>
            <div className="w-full flex gap-12">
                <AddLiquidity jetton0={jetton0} jetton1={jetton1} />
                <RemoveLiquidity jetton0={jetton0} jetton1={jetton1} />
            </div>
        </div>
    );
};

export default PoolPage;
