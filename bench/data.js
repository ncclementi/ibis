window.BENCHMARK_DATA = {
  "lastUpdate": 1684488708375,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9c3d173c1de88e4a489a6c4c39f7302e03fdabe1",
          "message": "fix(duckdb): ensure that types are inferred correctly across `duckdb_engine` versions",
          "timestamp": "2023-05-19T04:24:57-05:00",
          "tree_id": "ebaaf96f5579d4d23602680548e349d2c3696fd1",
          "url": "https://github.com/ibis-project/ibis/commit/9c3d173c1de88e4a489a6c4c39f7302e03fdabe1"
        },
        "date": 1684488625748,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.9228905885862,
            "unit": "iter/sec",
            "range": "stddev: 0.00031391553621503695",
            "extra": "mean: 3.6775131282087594 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.581372926268726,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137198053225715",
            "extra": "mean: 116.53146979999747 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2212.3900172434123,
            "unit": "iter/sec",
            "range": "stddev: 0.00008550412117134283",
            "extra": "mean: 451.9998699171394 usec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.841713573282,
            "unit": "iter/sec",
            "range": "stddev: 0.000014756136178411852",
            "extra": "mean: 560.5878550719959 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.99416566738306,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188682930671121",
            "extra": "mean: 9.61592406249423 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.96664480701635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026624682157153",
            "extra": "mean: 9.711882929411118 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.79146173377038,
            "unit": "iter/sec",
            "range": "stddev: 0.00041246196439032837",
            "extra": "mean: 9.634703888890625 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.57754179576973,
            "unit": "iter/sec",
            "range": "stddev: 0.0008536921214332119",
            "extra": "mean: 17.36788283784409 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.59428706254828,
            "unit": "iter/sec",
            "range": "stddev: 0.00011780512450076162",
            "extra": "mean: 9.5607516250098 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.52433146917512,
            "unit": "iter/sec",
            "range": "stddev: 0.023606123013795857",
            "extra": "mean: 25.957621115375893 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.08760042887549,
            "unit": "iter/sec",
            "range": "stddev: 0.0007264834585553479",
            "extra": "mean: 9.892410105268974 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2050.6966971383467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947175272846547",
            "extra": "mean: 487.63915277937207 usec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.57349735723528,
            "unit": "iter/sec",
            "range": "stddev: 0.00007432487715613032",
            "extra": "mean: 5.30297212500435 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 218.934077015873,
            "unit": "iter/sec",
            "range": "stddev: 0.004372409835869009",
            "extra": "mean: 4.567584971833776 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.99349357689994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632259722722149",
            "extra": "mean: 4.31046571428317 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7827.501570987544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000943975930130984",
            "extra": "mean: 127.75468531446576 usec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2169.1827365435374,
            "unit": "iter/sec",
            "range": "stddev: 0.00008186537390649701",
            "extra": "mean: 461.003115668088 usec\nrounds: 1219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.94718111098615,
            "unit": "iter/sec",
            "range": "stddev: 0.0007052727294732857",
            "extra": "mean: 9.620270499998295 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148272.76756783694,
            "unit": "iter/sec",
            "range": "stddev: 3.86279380439883e-7",
            "extra": "mean: 6.74432679987905 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16996870376727632,
            "unit": "iter/sec",
            "range": "stddev: 0.06641146052682613",
            "extra": "mean: 5.883436055199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.74351040785325,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121486853731727",
            "extra": "mean: 3.5747031219492658 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2109.1923759552237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009635451432150996",
            "extra": "mean: 474.1151216930196 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2111.145734606403,
            "unit": "iter/sec",
            "range": "stddev: 0.00009568335692425455",
            "extra": "mean: 473.67644194702535 usec\nrounds: 1869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12466.67383015673,
            "unit": "iter/sec",
            "range": "stddev: 0.000016048014080421375",
            "extra": "mean: 80.21385765151025 usec\nrounds: 4215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7922524632744469,
            "unit": "iter/sec",
            "range": "stddev: 0.004222582182970071",
            "extra": "mean: 1.2622239076000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.954847640529,
            "unit": "iter/sec",
            "range": "stddev: 0.0002327158539899628",
            "extra": "mean: 10.53132120000555 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2991562787525226,
            "unit": "iter/sec",
            "range": "stddev: 0.06656436444462144",
            "extra": "mean: 769.7303367999893 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4482.414132961562,
            "unit": "iter/sec",
            "range": "stddev: 0.000025618560654049022",
            "extra": "mean: 223.0940672452532 usec\nrounds: 922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.36277438349825,
            "unit": "iter/sec",
            "range": "stddev: 0.00026329156442573924",
            "extra": "mean: 10.06413122222638 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2161.257572212109,
            "unit": "iter/sec",
            "range": "stddev: 0.00009020924941908951",
            "extra": "mean: 462.6935784319641 usec\nrounds: 1224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.8509672682789,
            "unit": "iter/sec",
            "range": "stddev: 0.0003077324186661088",
            "extra": "mean: 3.6516212083353614 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.0799768580874,
            "unit": "iter/sec",
            "range": "stddev: 0.000051763806589994223",
            "extra": "mean: 1.4791149482746846 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.90269898929753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008241310182923654",
            "extra": "mean: 10.009739577777863 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1149.6646369430357,
            "unit": "iter/sec",
            "range": "stddev: 0.000010325522570226422",
            "extra": "mean: 869.8188740144302 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6260103.16061869,
            "unit": "iter/sec",
            "range": "stddev: 4.8746177256706226e-9",
            "extra": "mean: 159.7417765078882 nsec\nrounds: 48310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.90131682537304,
            "unit": "iter/sec",
            "range": "stddev: 0.00029956939691347726",
            "extra": "mean: 3.5854975924194883 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.78413631121123,
            "unit": "iter/sec",
            "range": "stddev: 0.017512401814358425",
            "extra": "mean: 11.79465927835096 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.71775324571128,
            "unit": "iter/sec",
            "range": "stddev: 0.0009164482384033522",
            "extra": "mean: 10.557682860211624 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.99909401587121,
            "unit": "iter/sec",
            "range": "stddev: 0.001158618461230663",
            "extra": "mean: 27.027688828570717 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.63305143971777,
            "unit": "iter/sec",
            "range": "stddev: 0.03124578332585145",
            "extra": "mean: 39.01213253333253 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.38424523531984,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048751310764812",
            "extra": "mean: 3.671284288619828 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2073.7113218160202,
            "unit": "iter/sec",
            "range": "stddev: 0.0001197289158568132",
            "extra": "mean: 482.22719791309504 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.817797332927135,
            "unit": "iter/sec",
            "range": "stddev: 0.0007844231017639382",
            "extra": "mean: 27.919081419356424 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.1189755662094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003990551438617307",
            "extra": "mean: 3.80056207595095 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.65431126375987,
            "unit": "iter/sec",
            "range": "stddev: 0.0009050649506964895",
            "extra": "mean: 10.45431185263121 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13859.687891472151,
            "unit": "iter/sec",
            "range": "stddev: 0.000001514437092654621",
            "extra": "mean: 72.151696909084 usec\nrounds: 6536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.362314036926687,
            "unit": "iter/sec",
            "range": "stddev: 0.00009070568633256006",
            "extra": "mean: 51.64671940000858 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.05982432771157,
            "unit": "iter/sec",
            "range": "stddev: 0.00005839323819537935",
            "extra": "mean: 7.808850318589766 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.55303066738335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005991906021523615",
            "extra": "mean: 6.004093687115556 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.657737687546179,
            "unit": "iter/sec",
            "range": "stddev: 0.001328379551951121",
            "extra": "mean: 603.231746199981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10028.283423783541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018098416864080112",
            "extra": "mean: 99.71796345806837 usec\nrounds: 4871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.28261285502128,
            "unit": "iter/sec",
            "range": "stddev: 0.02098630177063191",
            "extra": "mean: 12.153235845365783 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.0130321067043,
            "unit": "iter/sec",
            "range": "stddev: 0.0010401914248859556",
            "extra": "mean: 10.202724867355652 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1919296.2179370224,
            "unit": "iter/sec",
            "range": "stddev: 7.091628375018816e-8",
            "extra": "mean: 521.024316441816 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 417.633986067084,
            "unit": "iter/sec",
            "range": "stddev: 0.0001598704814543545",
            "extra": "mean: 2.394441145504311 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.19359955278065,
            "unit": "iter/sec",
            "range": "stddev: 0.000958479364939327",
            "extra": "mean: 10.081295612907994 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.2422020536495,
            "unit": "iter/sec",
            "range": "stddev: 0.00024554215441066043",
            "extra": "mean: 5.73913775316096 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.00144166022704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698716005990023",
            "extra": "mean: 3.184698753969654 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11117583.205019629,
            "unit": "iter/sec",
            "range": "stddev: 3.069720136708861e-9",
            "extra": "mean: 89.9476065579307 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6164185.159605396,
            "unit": "iter/sec",
            "range": "stddev: 8.339972168512037e-9",
            "extra": "mean: 162.22744354792903 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.60161387984229,
            "unit": "iter/sec",
            "range": "stddev: 0.0009978762764148385",
            "extra": "mean: 10.039997958330105 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.13191419830993,
            "unit": "iter/sec",
            "range": "stddev: 0.000026204622801862245",
            "extra": "mean: 9.16322239324825 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1776164.9928789902,
            "unit": "iter/sec",
            "range": "stddev: 1.101015984439199e-7",
            "extra": "mean: 563.010758577725 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5098076191548593,
            "unit": "iter/sec",
            "range": "stddev: 0.001418845632918623",
            "extra": "mean: 398.4369130000232 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2133.398736937815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009836641668627235",
            "extra": "mean: 468.7356295313811 usec\nrounds: 1131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.79273157634225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002858461218857123",
            "extra": "mean: 3.5868940856019713 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.58999973571534,
            "unit": "iter/sec",
            "range": "stddev: 0.0008214497662934289",
            "extra": "mean: 10.3530386451615 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.897210228243625,
            "unit": "iter/sec",
            "range": "stddev: 0.008286569022424247",
            "extra": "mean: 1.1145659829999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 242.89476161701847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500362726973707",
            "extra": "mean: 4.117009330883548 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1933997.6460931636,
            "unit": "iter/sec",
            "range": "stddev: 1.0795023541214842e-7",
            "extra": "mean: 517.0637110236836 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1925278.5534741657,
            "unit": "iter/sec",
            "range": "stddev: 7.825472432283544e-8",
            "extra": "mean: 519.405359912985 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.50945373689439,
            "unit": "iter/sec",
            "range": "stddev: 0.0011276169159205591",
            "extra": "mean: 10.151309971435499 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9028512528660562,
            "unit": "iter/sec",
            "range": "stddev: 0.007006495085636041",
            "extra": "mean: 1.1076021624000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.19877772680194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008445047549545607",
            "extra": "mean: 9.505813865983974 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.20837981447147,
            "unit": "iter/sec",
            "range": "stddev: 0.00006844399453691847",
            "extra": "mean: 8.911990366971063 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4475228.453499734,
            "unit": "iter/sec",
            "range": "stddev: 1.1739527784467976e-8",
            "extra": "mean: 223.4522796742823 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.442678948600644,
            "unit": "iter/sec",
            "range": "stddev: 0.0004558929893992299",
            "extra": "mean: 19.43911204545078 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.58505800069571,
            "unit": "iter/sec",
            "range": "stddev: 0.0008962861726227344",
            "extra": "mean: 42.39972613043827 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5590621.851109701,
            "unit": "iter/sec",
            "range": "stddev: 9.066835385168408e-9",
            "extra": "mean: 178.87097833354179 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.79833893532614,
            "unit": "iter/sec",
            "range": "stddev: 0.0011380887319607188",
            "extra": "mean: 10.661169604394583 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7066684.2684407,
            "unit": "iter/sec",
            "range": "stddev: 3.960182933056935e-9",
            "extra": "mean: 141.50908148900692 nsec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2082.0507096179826,
            "unit": "iter/sec",
            "range": "stddev: 0.00014102266751212745",
            "extra": "mean: 480.29569855360603 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.49196121090452,
            "unit": "iter/sec",
            "range": "stddev: 0.004259421139501689",
            "extra": "mean: 6.472828697118105 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.9789455149839,
            "unit": "iter/sec",
            "range": "stddev: 0.00002496319429106987",
            "extra": "mean: 1.3192978590197946 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.84949266561982,
            "unit": "iter/sec",
            "range": "stddev: 0.0005259287904191594",
            "extra": "mean: 21.344948324997404 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1046160.5804161568,
            "unit": "iter/sec",
            "range": "stddev: 1.4546603922033582e-7",
            "extra": "mean: 955.8761998107456 nsec\nrounds: 80000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.02955034100218,
            "unit": "iter/sec",
            "range": "stddev: 0.0004687782144696658",
            "extra": "mean: 18.857410511112803 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.64240732641213,
            "unit": "iter/sec",
            "range": "stddev: 0.0001144589674660099",
            "extra": "mean: 5.034171773587023 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.8240705017231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000598149601960052",
            "extra": "mean: 6.217974690481957 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.98168222555819,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253794098904174",
            "extra": "mean: 9.61707849494865 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 83.34731572375426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007622932243573226",
            "extra": "mean: 11.997986873559224 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.3057764821472,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372318476843738",
            "extra": "mean: 1.871587476714119 msec\nrounds: 451"
          }
        ]
      }
    ]
  }
}