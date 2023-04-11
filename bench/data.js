window.BENCHMARK_DATA = {
  "lastUpdate": 1681214265635,
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
          "id": "1b93011168246e167e378ec8ddfd86872c7a9e47",
          "message": "test(duckdb): use `xfail_version` so the test automatically passes when fixed upstream",
          "timestamp": "2023-04-11T07:52:27-04:00",
          "tree_id": "385774a28e68a592bd639ce5d3f0e3d75de651ad",
          "url": "https://github.com/ibis-project/ibis/commit/1b93011168246e167e378ec8ddfd86872c7a9e47"
        },
        "date": 1681214180862,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.99272001775226,
            "unit": "iter/sec",
            "range": "stddev: 0.00547185295480318",
            "extra": "mean: 10.98989017808133 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.2962228591366,
            "unit": "iter/sec",
            "range": "stddev: 0.00023258820883268708",
            "extra": "mean: 3.632450854626071 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 93.71072937930191,
            "unit": "iter/sec",
            "range": "stddev: 0.006470160269688636",
            "extra": "mean: 10.671136663043326 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.4306879353226,
            "unit": "iter/sec",
            "range": "stddev: 0.000647906913243377",
            "extra": "mean: 10.47880950703973 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6167742.942836804,
            "unit": "iter/sec",
            "range": "stddev: 9.228416866111132e-9",
            "extra": "mean: 162.13386473288097 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.10448034028607,
            "unit": "iter/sec",
            "range": "stddev: 0.00008412231108378074",
            "extra": "mean: 8.39598978260903 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.10900047765838,
            "unit": "iter/sec",
            "range": "stddev: 0.00009420970697014241",
            "extra": "mean: 10.5142520158742 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.18021227648497,
            "unit": "iter/sec",
            "range": "stddev: 0.00023052376062699067",
            "extra": "mean: 8.682046857141959 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.409036915343211,
            "unit": "iter/sec",
            "range": "stddev: 0.00006758503709934357",
            "extra": "mean: 64.89698256250342 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1586361.6002058247,
            "unit": "iter/sec",
            "range": "stddev: 9.459264473929765e-8",
            "extra": "mean: 630.373301944685 nsec\nrounds: 138909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.16519791923815,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630462488127041",
            "extra": "mean: 3.58210839837313 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.500592040639417,
            "unit": "iter/sec",
            "range": "stddev: 0.00013149203323183724",
            "extra": "mean: 181.79861233332892 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5575764.094124985,
            "unit": "iter/sec",
            "range": "stddev: 1.0271480960171094e-8",
            "extra": "mean: 179.3476164200328 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7261283.035190024,
            "unit": "iter/sec",
            "range": "stddev: 3.956909898500746e-9",
            "extra": "mean: 137.7167086248196 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5542242354774634,
            "unit": "iter/sec",
            "range": "stddev: 0.002828494419009241",
            "extra": "mean: 391.508304599995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.2990777703329,
            "unit": "iter/sec",
            "range": "stddev: 0.00004215727184368856",
            "extra": "mean: 3.5050936996193336 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.57505210475166,
            "unit": "iter/sec",
            "range": "stddev: 0.010197028462334562",
            "extra": "mean: 10.462981478722975 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.49724290538328,
            "unit": "iter/sec",
            "range": "stddev: 0.00009820755506976377",
            "extra": "mean: 17.39213829166708 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.38914032018626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943023499310282",
            "extra": "mean: 10.483373648649813 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2251.6778915701325,
            "unit": "iter/sec",
            "range": "stddev: 0.00008918372445646078",
            "extra": "mean: 444.1132560495513 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.57350362487502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583575443276204",
            "extra": "mean: 10.042832315786711 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140450.57581525683,
            "unit": "iter/sec",
            "range": "stddev: 3.814815749937949e-7",
            "extra": "mean: 7.119942329858161 usec\nrounds: 38911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.676493368476963,
            "unit": "iter/sec",
            "range": "stddev: 0.0019590176632467713",
            "extra": "mean: 1.4782110906000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 733.3802016426579,
            "unit": "iter/sec",
            "range": "stddev: 0.00001592132696505259",
            "extra": "mean: 1.3635492173911365 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.979395812527464,
            "unit": "iter/sec",
            "range": "stddev: 0.00012739711251626105",
            "extra": "mean: 20.41674837777868 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2362.20238387173,
            "unit": "iter/sec",
            "range": "stddev: 0.00007428889508932444",
            "extra": "mean: 423.33375278411415 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483258.35764474457,
            "unit": "iter/sec",
            "range": "stddev: 3.239842918136943e-7",
            "extra": "mean: 2.0692865093398454 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.6451232292686,
            "unit": "iter/sec",
            "range": "stddev: 0.00023901875025457035",
            "extra": "mean: 3.654368066929401 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.96307490860212,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900546317235774",
            "extra": "mean: 10.104778988764803 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.041283273657875,
            "unit": "iter/sec",
            "range": "stddev: 0.02095278241777898",
            "extra": "mean: 26.28723097499872 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11595.015672724738,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100621362636787",
            "extra": "mean: 86.24395414594622 usec\nrounds: 4667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.5311909975421,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361973819562381",
            "extra": "mean: 10.467785333333998 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.08065968846714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007788777053878517",
            "extra": "mean: 10.09278705999975 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.4712454209249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000987943188308612",
            "extra": "mean: 13.610766964284997 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1745.2472806257367,
            "unit": "iter/sec",
            "range": "stddev: 0.000005185629524599259",
            "extra": "mean: 572.9847060076567 usec\nrounds: 1398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.06152027926242,
            "unit": "iter/sec",
            "range": "stddev: 0.00007054532769519387",
            "extra": "mean: 6.132654707789919 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.8059505395401,
            "unit": "iter/sec",
            "range": "stddev: 0.013993459656292138",
            "extra": "mean: 11.388749781254148 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4732.533533864337,
            "unit": "iter/sec",
            "range": "stddev: 0.000020593115635017065",
            "extra": "mean: 211.3033099172681 usec\nrounds: 2178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11836.132730167998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021518561840055082",
            "extra": "mean: 84.48705525675584 usec\nrounds: 5013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2257.798648707968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000789912642970385",
            "extra": "mean: 442.90929156692204 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.3344159795097,
            "unit": "iter/sec",
            "range": "stddev: 0.000036529440071325154",
            "extra": "mean: 1.8337371907911528 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7973177304109073,
            "unit": "iter/sec",
            "range": "stddev: 0.0018077973500616503",
            "extra": "mean: 1.2542051453999874 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2205.4373656577045,
            "unit": "iter/sec",
            "range": "stddev: 0.00008209163126120735",
            "extra": "mean: 453.42480161606426 usec\nrounds: 1361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.83341484621803,
            "unit": "iter/sec",
            "range": "stddev: 0.000775596460214493",
            "extra": "mean: 10.118035499997358 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13528.499596036892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016478770767804373",
            "extra": "mean: 73.91802711757815 usec\nrounds: 7154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.8384643720327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002515295869066204",
            "extra": "mean: 3.6122148064516715 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2254.0337973101246,
            "unit": "iter/sec",
            "range": "stddev: 0.00008753946564197923",
            "extra": "mean: 443.64907092048077 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2494632.5197743187,
            "unit": "iter/sec",
            "range": "stddev: 1.8115432494087142e-8",
            "extra": "mean: 400.86064463327796 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.407982043415016,
            "unit": "iter/sec",
            "range": "stddev: 0.000269732318017295",
            "extra": "mean: 96.08010427272843 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.11641514758965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001945715773254842",
            "extra": "mean: 14.899484690905949 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2295.771946566598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803729996577425",
            "extra": "mean: 435.58333461454333 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2496892.330079882,
            "unit": "iter/sec",
            "range": "stddev: 1.9943512232656723e-8",
            "extra": "mean: 400.49784604360156 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 372.1148451354383,
            "unit": "iter/sec",
            "range": "stddev: 0.00006847403584150685",
            "extra": "mean: 2.6873423973075594 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.01449847257854,
            "unit": "iter/sec",
            "range": "stddev: 0.00042985737608786985",
            "extra": "mean: 37.01715954545906 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.4878236876922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002264022965109132",
            "extra": "mean: 3.577973404370664 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.76580664408914,
            "unit": "iter/sec",
            "range": "stddev: 0.00038423344555625",
            "extra": "mean: 3.987784512500525 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9137492056981472,
            "unit": "iter/sec",
            "range": "stddev: 0.0032501187665913704",
            "extra": "mean: 1.094392196199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.84733144825819,
            "unit": "iter/sec",
            "range": "stddev: 0.0006811204440962117",
            "extra": "mean: 11.514458571427483 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.7694823201255,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315799934940013",
            "extra": "mean: 3.791189151997287 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.93889356046205,
            "unit": "iter/sec",
            "range": "stddev: 0.004098928647895412",
            "extra": "mean: 5.782389255603656 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.71346922594395,
            "unit": "iter/sec",
            "range": "stddev: 0.0007763306585789119",
            "extra": "mean: 10.130329810525788 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.1136024922002,
            "unit": "iter/sec",
            "range": "stddev: 0.000020589489010274266",
            "extra": "mean: 1.4511395456184144 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17883988540444298,
            "unit": "iter/sec",
            "range": "stddev: 0.06576483010889446",
            "extra": "mean: 5.59159383120001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13050953.788597077,
            "unit": "iter/sec",
            "range": "stddev: 3.1433385285476287e-9",
            "extra": "mean: 76.62275234417743 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.94070758503628,
            "unit": "iter/sec",
            "range": "stddev: 0.00010839082781908258",
            "extra": "mean: 6.3718331297707635 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1922.8691832825557,
            "unit": "iter/sec",
            "range": "stddev: 0.0030492310643391936",
            "extra": "mean: 520.0561789091064 usec\nrounds: 1375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.56112254503482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698077074160693",
            "extra": "mean: 22.441086374998065 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9144853686610768,
            "unit": "iter/sec",
            "range": "stddev: 0.002477875910276355",
            "extra": "mean: 1.0935112077999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.49062860780722,
            "unit": "iter/sec",
            "range": "stddev: 0.000702492470950305",
            "extra": "mean: 10.472231826089802 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.3854557815609,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482518950499248",
            "extra": "mean: 6.274098192312531 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.82938197611001,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447287030441578",
            "extra": "mean: 10.545254847826868 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.47725588300317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559417784598048",
            "extra": "mean: 10.365137263156491 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.49392784389315,
            "unit": "iter/sec",
            "range": "stddev: 0.015246611547798286",
            "extra": "mean: 11.835169999997529 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.819799637182676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002685510447301424",
            "extra": "mean: 17.295113547175305 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2521200.599904215,
            "unit": "iter/sec",
            "range": "stddev: 1.71675398759258e-8",
            "extra": "mean: 396.6364279136881 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69623.27638856637,
            "unit": "iter/sec",
            "range": "stddev: 4.515836006832416e-7",
            "extra": "mean: 14.36301265713231 usec\nrounds: 13352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.82221824484395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101356250641582",
            "extra": "mean: 3.776118207254953 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 725659.8864287152,
            "unit": "iter/sec",
            "range": "stddev: 1.4078263460722793e-7",
            "extra": "mean: 1.3780560544987963 usec\nrounds: 25511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.66017446243944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000647459673328911",
            "extra": "mean: 9.036674710280911 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.26330811453777,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851394891231897",
            "extra": "mean: 23.11427497297577 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.5531633577612,
            "unit": "iter/sec",
            "range": "stddev: 0.000012812791675255905",
            "extra": "mean: 846.3436356584923 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8017.343446718032,
            "unit": "iter/sec",
            "range": "stddev: 0.000011302936159760368",
            "extra": "mean: 124.72959486466286 usec\nrounds: 3700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.69033517777657,
            "unit": "iter/sec",
            "range": "stddev: 0.000295540249616436",
            "extra": "mean: 7.262673874014953 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6679468620298452,
            "unit": "iter/sec",
            "range": "stddev: 0.0017116584756345537",
            "extra": "mean: 599.5394833999853 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 267.6421336785471,
            "unit": "iter/sec",
            "range": "stddev: 0.0036880271084625397",
            "extra": "mean: 3.7363324909113707 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2232.0263833521476,
            "unit": "iter/sec",
            "range": "stddev: 0.00008154279827990984",
            "extra": "mean: 448.02337797555936 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.79498479161015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091843076462064",
            "extra": "mean: 10.121971293475232 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.8325228565713,
            "unit": "iter/sec",
            "range": "stddev: 0.000036966356637470035",
            "extra": "mean: 5.185847206613582 msec\nrounds: 121"
          }
        ]
      }
    ]
  }
}