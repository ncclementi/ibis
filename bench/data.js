window.BENCHMARK_DATA = {
  "lastUpdate": 1677162990656,
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
          "id": "0a4cb1a48ef413b94e144ceb7b210b9f33723fc0",
          "message": "test: avoid memtable in set ops testing to prevent unreliable snowflake random string generation",
          "timestamp": "2023-02-23T09:27:00-05:00",
          "tree_id": "eff1ef03fad023acdeae327cd7e02ec5eb393370",
          "url": "https://github.com/ibis-project/ibis/commit/0a4cb1a48ef413b94e144ceb7b210b9f33723fc0"
        },
        "date": 1677162899444,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.20630611700177,
            "unit": "iter/sec",
            "range": "stddev: 0.00021409421000060858",
            "extra": "mean: 13.660025386361564 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.79212937920768,
            "unit": "iter/sec",
            "range": "stddev: 0.010342709917319306",
            "extra": "mean: 11.934295111112688 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1177370.4331017158,
            "unit": "iter/sec",
            "range": "stddev: 1.6567740829624218e-7",
            "extra": "mean: 849.3503589737315 nsec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5006677703951095,
            "unit": "iter/sec",
            "range": "stddev: 0.0020243309166189166",
            "extra": "mean: 1.997332480999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 369.916926651453,
            "unit": "iter/sec",
            "range": "stddev: 0.00003736020660168509",
            "extra": "mean: 2.703309656717143 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 72.59279972405379,
            "unit": "iter/sec",
            "range": "stddev: 0.012624194764756746",
            "extra": "mean: 13.775470897958048 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117918.613740137,
            "unit": "iter/sec",
            "range": "stddev: 6.885869667076065e-7",
            "extra": "mean: 8.480425339834376 usec\nrounds: 28248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.35473622211263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006942074677222155",
            "extra": "mean: 13.632384921569004 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.72224248189987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008367795284549908",
            "extra": "mean: 8.352666799999042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 120.61827618802025,
            "unit": "iter/sec",
            "range": "stddev: 0.012195071716203633",
            "extra": "mean: 8.29061757143002 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9277000.001972575,
            "unit": "iter/sec",
            "range": "stddev: 5.208607988531141e-9",
            "extra": "mean: 107.79346769293434 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 184.83740169267003,
            "unit": "iter/sec",
            "range": "stddev: 0.0003729372589556087",
            "extra": "mean: 5.4101604482771535 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9310.954597003505,
            "unit": "iter/sec",
            "range": "stddev: 0.000002549328064120169",
            "extra": "mean: 107.40037335396573 usec\nrounds: 4556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.131644814383638,
            "unit": "iter/sec",
            "range": "stddev: 0.0009288190140193357",
            "extra": "mean: 35.547157181819045 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.481512965181478,
            "unit": "iter/sec",
            "range": "stddev: 0.00020735306185983512",
            "extra": "mean: 87.09653536363828 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 207.9671490260783,
            "unit": "iter/sec",
            "range": "stddev: 0.0002693188133304728",
            "extra": "mean: 4.808451741936433 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.662714206357688,
            "unit": "iter/sec",
            "range": "stddev: 0.016111790795248406",
            "extra": "mean: 1.5089460741999972 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.98071151215727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007481505623553352",
            "extra": "mean: 13.517036799999818 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.49426886773988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008475630265742624",
            "extra": "mean: 10.582652387095168 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.827866260072607,
            "unit": "iter/sec",
            "range": "stddev: 0.0007442914834821623",
            "extra": "mean: 33.525696785713215 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 215.4200905464816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811177387377316",
            "extra": "mean: 4.642092561855219 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.093156525806172,
            "unit": "iter/sec",
            "range": "stddev: 0.0005588915049933595",
            "extra": "mean: 33.23014650000099 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8074.454755972579,
            "unit": "iter/sec",
            "range": "stddev: 0.000017364354599026244",
            "extra": "mean: 123.84737176963088 usec\nrounds: 3018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 828.8400862119545,
            "unit": "iter/sec",
            "range": "stddev: 0.000023743589519130218",
            "extra": "mean: 1.2065053520399782 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.40502386861267,
            "unit": "iter/sec",
            "range": "stddev: 0.000820703036839014",
            "extra": "mean: 10.706062249998897 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 211.45204474760214,
            "unit": "iter/sec",
            "range": "stddev: 0.00030892356485598773",
            "extra": "mean: 4.7292046818163485 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.563635101449215,
            "unit": "iter/sec",
            "range": "stddev: 0.000916101828349748",
            "extra": "mean: 15.732265758620853 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.53992710122344,
            "unit": "iter/sec",
            "range": "stddev: 0.00013936709844220116",
            "extra": "mean: 7.488397078740344 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2943.830567317023,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801889334831573",
            "extra": "mean: 339.6934630349293 usec\nrounds: 1542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5538.704224589071,
            "unit": "iter/sec",
            "range": "stddev: 0.000019766781803736787",
            "extra": "mean: 180.54764425955466 usec\nrounds: 3362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.521925992612918,
            "unit": "iter/sec",
            "range": "stddev: 0.0009713181986483882",
            "extra": "mean: 51.22445399999975 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1168355.7626566556,
            "unit": "iter/sec",
            "range": "stddev: 1.26571273239914e-7",
            "extra": "mean: 855.9036827328679 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 528.7450020287594,
            "unit": "iter/sec",
            "range": "stddev: 0.00006743498278358134",
            "extra": "mean: 1.891270832183882 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 88.45632811875998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009337868952637363",
            "extra": "mean: 11.305013686046484 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6639690487736464,
            "unit": "iter/sec",
            "range": "stddev: 0.013135582985764059",
            "extra": "mean: 1.5060943004000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 222.09259199278958,
            "unit": "iter/sec",
            "range": "stddev: 0.00008106482785439882",
            "extra": "mean: 4.502626544303944 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 210.2818766753417,
            "unit": "iter/sec",
            "range": "stddev: 0.00031278006461903595",
            "extra": "mean: 4.755521568527371 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 462.08350935532803,
            "unit": "iter/sec",
            "range": "stddev: 0.00005071057748858386",
            "extra": "mean: 2.1641109880660787 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8689961654452498,
            "unit": "iter/sec",
            "range": "stddev: 0.001101691805288472",
            "extra": "mean: 535.0465765999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 113.87110760535657,
            "unit": "iter/sec",
            "range": "stddev: 0.00008168627666990768",
            "extra": "mean: 8.78185890195872 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.2108880235196,
            "unit": "iter/sec",
            "range": "stddev: 0.000059597743878042435",
            "extra": "mean: 10.844706318682636 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.98718167733725,
            "unit": "iter/sec",
            "range": "stddev: 0.00047284195645056333",
            "extra": "mean: 14.495446482755895 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.244474989065022,
            "unit": "iter/sec",
            "range": "stddev: 0.0010943217130912062",
            "extra": "mean: 33.063890193549504 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.80525185599474,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556322601741628",
            "extra": "mean: 14.533774283581433 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.32425073156661,
            "unit": "iter/sec",
            "range": "stddev: 0.0017704004281078906",
            "extra": "mean: 755.1440042000081 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3480.1236200446588,
            "unit": "iter/sec",
            "range": "stddev: 0.00007800304934529377",
            "extra": "mean: 287.34611444267244 usec\nrounds: 1634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.82637345367268,
            "unit": "iter/sec",
            "range": "stddev: 0.00032228412581066255",
            "extra": "mean: 23.908360142856043 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 302009.7082750712,
            "unit": "iter/sec",
            "range": "stddev: 6.32661691337394e-7",
            "extra": "mean: 3.3111518358515726 usec\nrounds: 1607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 228.8985706683067,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648340670050409",
            "extra": "mean: 4.368747245036685 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 497264.119216645,
            "unit": "iter/sec",
            "range": "stddev: 2.639166530155765e-7",
            "extra": "mean: 2.0110037329363917 usec\nrounds: 18484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3681864.8724384517,
            "unit": "iter/sec",
            "range": "stddev: 1.6573090239104316e-8",
            "extra": "mean: 271.6014939836628 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.221632337288359,
            "unit": "iter/sec",
            "range": "stddev: 0.000635876629235527",
            "extra": "mean: 236.87519899999643 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.17039575895839,
            "unit": "iter/sec",
            "range": "stddev: 0.00006985267678132568",
            "extra": "mean: 13.128460080009367 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.34581383644965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007287119614431792",
            "extra": "mean: 11.448745578951801 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.86451421482714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008879819692079734",
            "extra": "mean: 10.768375934069503 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3288.506186653201,
            "unit": "iter/sec",
            "range": "stddev: 0.00007589977342304525",
            "extra": "mean: 304.0894385598606 usec\nrounds: 1888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.26739305571742,
            "unit": "iter/sec",
            "range": "stddev: 0.00046194308550607903",
            "extra": "mean: 10.38773325274553 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11417445062072025,
            "unit": "iter/sec",
            "range": "stddev: 0.12539508589342058",
            "extra": "mean: 8.758526925799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1166648.977218777,
            "unit": "iter/sec",
            "range": "stddev: 1.4892931495229593e-7",
            "extra": "mean: 857.1558536689773 nsec\nrounds: 84034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6267265175700145,
            "unit": "iter/sec",
            "range": "stddev: 0.0029875305384987603",
            "extra": "mean: 1.595592291000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.80473139348885,
            "unit": "iter/sec",
            "range": "stddev: 0.000801318248132154",
            "extra": "mean: 13.926658878786341 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 47618.19085832398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016584057367285336",
            "extra": "mean: 21.00037783827718 usec\nrounds: 11849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 96.44852253465373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007536333627145638",
            "extra": "mean: 10.3682251808544 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3030.7547239205514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006153874112921582",
            "extra": "mean: 329.95081789608196 usec\nrounds: 1587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1369583.5339011955,
            "unit": "iter/sec",
            "range": "stddev: 1.2169166419147963e-7",
            "extra": "mean: 730.1489651759656 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4449134.0794516355,
            "unit": "iter/sec",
            "range": "stddev: 1.736750998791768e-8",
            "extra": "mean: 224.76283747426632 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3410.428291056121,
            "unit": "iter/sec",
            "range": "stddev: 0.00014083126359446273",
            "extra": "mean: 293.21830417091866 usec\nrounds: 1486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3429.1227922235785,
            "unit": "iter/sec",
            "range": "stddev: 0.00006803579586157998",
            "extra": "mean: 291.61977000874924 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.396508840586584,
            "unit": "iter/sec",
            "range": "stddev: 0.00020307769577221786",
            "extra": "mean: 19.085241023260604 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 205.72115016763286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526025668092107",
            "extra": "mean: 4.860948906736839 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9090.295518246345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002017282158168623",
            "extra": "mean: 110.0074247303365 usec\nrounds: 4165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3483938.1378914737,
            "unit": "iter/sec",
            "range": "stddev: 1.906249363401159e-8",
            "extra": "mean: 287.03150297758884 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 215.21990440195432,
            "unit": "iter/sec",
            "range": "stddev: 0.00038269568271555814",
            "extra": "mean: 4.646410390241394 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3134.0462924505446,
            "unit": "iter/sec",
            "range": "stddev: 0.00007171525656269555",
            "extra": "mean: 319.07633349540896 usec\nrounds: 2060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 41.124655740496564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006883450485006153",
            "extra": "mean: 24.316312975606817 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1230.0822050563363,
            "unit": "iter/sec",
            "range": "stddev: 0.000020221918689404154",
            "extra": "mean: 812.9537976319243 usec\nrounds: 929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.780579140716799,
            "unit": "iter/sec",
            "range": "stddev: 0.0003437232484550508",
            "extra": "mean: 128.525137000004 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.05585051653496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008756569056008964",
            "extra": "mean: 13.688157661974888 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.12645350282141,
            "unit": "iter/sec",
            "range": "stddev: 0.00010671460122800345",
            "extra": "mean: 17.20387086666935 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 231.48664293001104,
            "unit": "iter/sec",
            "range": "stddev: 0.00004384208502063043",
            "extra": "mean: 4.319903677130717 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3409.378851593448,
            "unit": "iter/sec",
            "range": "stddev: 0.000028860717749474596",
            "extra": "mean: 293.3085595731398 usec\nrounds: 1687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 56.878522083058684,
            "unit": "iter/sec",
            "range": "stddev: 0.02504522402180384",
            "extra": "mean: 17.581328828124576 msec\nrounds: 64"
          }
        ]
      }
    ]
  }
}