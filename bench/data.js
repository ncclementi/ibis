window.BENCHMARK_DATA = {
  "lastUpdate": 1676766147973,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "00367e71800d3bc9581ed20dafba8253e51f425d",
          "message": "chore(flake/nixpkgs): `02277dbd` -> `45f2df84`",
          "timestamp": "2023-02-19T00:17:23Z",
          "tree_id": "8db2258fa2fb2db338d1ae42e4579e0cb8be757c",
          "url": "https://github.com/ibis-project/ibis/commit/00367e71800d3bc9581ed20dafba8253e51f425d"
        },
        "date": 1676766063569,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.198897067797409,
            "unit": "iter/sec",
            "range": "stddev: 0.001561438067419689",
            "extra": "mean: 454.77344740000945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.30411861381441,
            "unit": "iter/sec",
            "range": "stddev: 0.00006102730578580342",
            "extra": "mean: 10.492725965518233 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.47941630144715,
            "unit": "iter/sec",
            "range": "stddev: 0.00016076032718964704",
            "extra": "mean: 7.068165999987741 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5269.266141639589,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439538111765082",
            "extra": "mean: 189.77974790410553 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1594544.9005058706,
            "unit": "iter/sec",
            "range": "stddev: 9.138563435520512e-8",
            "extra": "mean: 627.1381882584486 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55009.577646055186,
            "unit": "iter/sec",
            "range": "stddev: 0.000008366592852065685",
            "extra": "mean: 18.178652569089692 usec\nrounds: 11326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.8460665199235,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186710079873135",
            "extra": "mean: 6.178710558139506 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8543535255265152,
            "unit": "iter/sec",
            "range": "stddev: 0.003932936373100487",
            "extra": "mean: 1.1704756521999797 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.69998834489965,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676164766948451",
            "extra": "mean: 3.9729838947378866 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 988.919298866887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013858328295734058",
            "extra": "mean: 1.0112048588249916 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 412.3182578828024,
            "unit": "iter/sec",
            "range": "stddev: 0.000031784990765428825",
            "extra": "mean: 2.4253109846138337 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1935617.1583698534,
            "unit": "iter/sec",
            "range": "stddev: 4.6324533250243575e-8",
            "extra": "mean: 516.6310887852817 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.86729524731588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003150641003781967",
            "extra": "mean: 8.273536674696187 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.87495910911974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005622109346214127",
            "extra": "mean: 6.902504105259491 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4337040.359056429,
            "unit": "iter/sec",
            "range": "stddev: 1.1319157244025076e-8",
            "extra": "mean: 230.5719839365082 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5615462.004049524,
            "unit": "iter/sec",
            "range": "stddev: 1.561799266627776e-8",
            "extra": "mean: 178.07973756736814 nsec\nrounds: 55252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.86077623106735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006157296253426346",
            "extra": "mean: 6.140213887849811 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8539490548859402,
            "unit": "iter/sec",
            "range": "stddev: 0.003506097291437285",
            "extra": "mean: 1.1710300447999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 271.16181321056513,
            "unit": "iter/sec",
            "range": "stddev: 0.00006118500867907936",
            "extra": "mean: 3.6878349062501314 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.2042645578953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003776866499996076",
            "extra": "mean: 11.467329093018101 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5754872211002874,
            "unit": "iter/sec",
            "range": "stddev: 0.0476853400207181",
            "extra": "mean: 1.7376580458000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5665.804274744251,
            "unit": "iter/sec",
            "range": "stddev: 0.000060775559594699334",
            "extra": "mean: 176.4974488189744 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.00863428445717,
            "unit": "iter/sec",
            "range": "stddev: 0.0006639088814913177",
            "extra": "mean: 10.868545194447343 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.95630162354786,
            "unit": "iter/sec",
            "range": "stddev: 0.000018024994734143304",
            "extra": "mean: 3.774207270679708 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 578706.1106497501,
            "unit": "iter/sec",
            "range": "stddev: 1.6430823573784666e-7",
            "extra": "mean: 1.727992812927509 usec\nrounds: 16001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 327.80966564691084,
            "unit": "iter/sec",
            "range": "stddev: 0.0003131506787027201",
            "extra": "mean: 3.050550684729096 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.82643646932968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006158559430233934",
            "extra": "mean: 12.073439865667723 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1421925.8125313576,
            "unit": "iter/sec",
            "range": "stddev: 1.4024395692713523e-7",
            "extra": "mean: 703.2715709828547 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387197.8152710027,
            "unit": "iter/sec",
            "range": "stddev: 4.2941895386768e-7",
            "extra": "mean: 2.5826592004401996 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.30922914355062,
            "unit": "iter/sec",
            "range": "stddev: 0.00037550552306859564",
            "extra": "mean: 18.0801651999991 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9688.407663181199,
            "unit": "iter/sec",
            "range": "stddev: 0.000013503579392384699",
            "extra": "mean: 103.2161356917602 usec\nrounds: 3788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.797639373882014,
            "unit": "iter/sec",
            "range": "stddev: 0.0007115678005102683",
            "extra": "mean: 28.737581571426013 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118684.84334607309,
            "unit": "iter/sec",
            "range": "stddev: 0.00000115287679160434",
            "extra": "mean: 8.42567569545591 usec\nrounds: 32895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.86381005723385,
            "unit": "iter/sec",
            "range": "stddev: 0.000222504142967275",
            "extra": "mean: 7.0490141185166095 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.256860267656,
            "unit": "iter/sec",
            "range": "stddev: 0.00022425245905574096",
            "extra": "mean: 4.094050823809831 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 520.3890518632431,
            "unit": "iter/sec",
            "range": "stddev: 0.000023214782583278608",
            "extra": "mean: 1.9216391974802676 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.09150291099596,
            "unit": "iter/sec",
            "range": "stddev: 0.00021882020931512916",
            "extra": "mean: 3.9985364890861 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 129.50877348121975,
            "unit": "iter/sec",
            "range": "stddev: 0.01158596358065111",
            "extra": "mean: 7.721484599999022 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.42031885513151,
            "unit": "iter/sec",
            "range": "stddev: 0.00032993785208813246",
            "extra": "mean: 23.57360875610278 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 628.6410549892153,
            "unit": "iter/sec",
            "range": "stddev: 0.000018271978218265493",
            "extra": "mean: 1.5907328865391326 msec\nrounds: 520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5798483847247324,
            "unit": "iter/sec",
            "range": "stddev: 0.0012454396572294233",
            "extra": "mean: 632.9721317999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.682589429580936,
            "unit": "iter/sec",
            "range": "stddev: 0.00007163835787079872",
            "extra": "mean: 73.08558114285445 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.61493861233201,
            "unit": "iter/sec",
            "range": "stddev: 0.000735170531389007",
            "extra": "mean: 11.413578732557001 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.48466687738191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006220144358422873",
            "extra": "mean: 11.30139305814142 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.45172920436556,
            "unit": "iter/sec",
            "range": "stddev: 0.0002246259870619799",
            "extra": "mean: 3.899369300813344 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.66532206616729,
            "unit": "iter/sec",
            "range": "stddev: 0.026059812884112753",
            "extra": "mean: 16.216569807695052 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5270.692703634974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004638436560222366",
            "extra": "mean: 189.72838225046627 usec\nrounds: 2310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.89605362090765,
            "unit": "iter/sec",
            "range": "stddev: 0.00019847844854903302",
            "extra": "mean: 3.969891491452087 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4492.790869748333,
            "unit": "iter/sec",
            "range": "stddev: 0.00002717397675995612",
            "extra": "mean: 222.57879990216767 usec\nrounds: 2039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10215.07334781346,
            "unit": "iter/sec",
            "range": "stddev: 0.000001694937899013343",
            "extra": "mean: 97.89454915799017 usec\nrounds: 4099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19168.67627059506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012167569843405761",
            "extra": "mean: 52.16844323955796 usec\nrounds: 5532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.48961347883508,
            "unit": "iter/sec",
            "range": "stddev: 0.000034672925702266146",
            "extra": "mean: 5.865459951459987 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.07643453548445,
            "unit": "iter/sec",
            "range": "stddev: 0.00009057697159414191",
            "extra": "mean: 6.940760320895579 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.89247843600522,
            "unit": "iter/sec",
            "range": "stddev: 0.00011310494097377434",
            "extra": "mean: 9.718883393619075 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1463.5639622442795,
            "unit": "iter/sec",
            "range": "stddev: 0.000008906605519485932",
            "extra": "mean: 683.2636125219739 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.07370719145323,
            "unit": "iter/sec",
            "range": "stddev: 0.001661149216627064",
            "extra": "mean: 16.373658092593107 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5937.871464750199,
            "unit": "iter/sec",
            "range": "stddev: 0.000048003984728964136",
            "extra": "mean: 168.41051645129693 usec\nrounds: 2401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15128967657889947,
            "unit": "iter/sec",
            "range": "stddev: 0.05984931321208902",
            "extra": "mean: 6.609836325999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.31013930387658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007029445865160353",
            "extra": "mean: 6.277064374995914 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.32634419523328,
            "unit": "iter/sec",
            "range": "stddev: 0.0007488807092900663",
            "extra": "mean: 10.715088098897972 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.572333967571,
            "unit": "iter/sec",
            "range": "stddev: 0.00025420554241848385",
            "extra": "mean: 4.19160085903309 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.982651356302435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002813470805868269",
            "extra": "mean: 111.3257055555626 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.45762668107915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627432023725179",
            "extra": "mean: 4.024831168831869 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.00726310794465,
            "unit": "iter/sec",
            "range": "stddev: 0.000438229822922373",
            "extra": "mean: 4.504357136792316 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.824276491049339,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623640838399017",
            "extra": "mean: 207.2849683999948 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 67.70594154400925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379076799398973",
            "extra": "mean: 14.769752509091012 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.183795625368525,
            "unit": "iter/sec",
            "range": "stddev: 0.002545473776762106",
            "extra": "mean: 26.893435249997804 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.28554809183106,
            "unit": "iter/sec",
            "range": "stddev: 0.00048056238667293285",
            "extra": "mean: 15.086244721317144 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4633676.82990238,
            "unit": "iter/sec",
            "range": "stddev: 1.2859381387450347e-8",
            "extra": "mean: 215.81133875081093 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.82948579856965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008181613563342689",
            "extra": "mean: 10.889748443038501 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12147784.083900077,
            "unit": "iter/sec",
            "range": "stddev: 4.228260907195664e-9",
            "extra": "mean: 82.31954018055087 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.255157097389926,
            "unit": "iter/sec",
            "range": "stddev: 0.0012042019810128363",
            "extra": "mean: 41.22834562500562 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5980.754800861012,
            "unit": "iter/sec",
            "range": "stddev: 0.00004876135214975999",
            "extra": "mean: 167.20297576085818 usec\nrounds: 2434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.28727143505495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007595499780933945",
            "extra": "mean: 6.4396778355283635 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.43428092947748,
            "unit": "iter/sec",
            "range": "stddev: 0.0296915872816737",
            "extra": "mean: 31.812402588228142 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.741133355531954,
            "unit": "iter/sec",
            "range": "stddev: 0.005109911721438591",
            "extra": "mean: 1.3492848385999878 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11028.231511283237,
            "unit": "iter/sec",
            "range": "stddev: 0.000001759754627342307",
            "extra": "mean: 90.67636991269879 usec\nrounds: 5504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6083.445652301672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004454080301963808",
            "extra": "mean: 164.3805266217263 usec\nrounds: 2404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.41485640098988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009844579897216388",
            "extra": "mean: 10.48054818420945 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 135.14759430683156,
            "unit": "iter/sec",
            "range": "stddev: 0.013023137423948648",
            "extra": "mean: 7.399317798655415 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5068.558692179201,
            "unit": "iter/sec",
            "range": "stddev: 0.000060805965718212224",
            "extra": "mean: 197.29474604743208 usec\nrounds: 2910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1446809.0355815315,
            "unit": "iter/sec",
            "range": "stddev: 1.1655530088107698e-7",
            "extra": "mean: 691.1762198098654 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}