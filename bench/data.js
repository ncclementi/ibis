window.BENCHMARK_DATA = {
  "lastUpdate": 1681222464970,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "d80aa1ee8f8bccb3c5b84cdf4091723bcf51bc97",
          "message": "feat(api): replace `suffixes` in `join` with `lname`/`rname`\n\nBREAKING CHANGE: the `suffixes` argument in all join methods has been removed in favor of `lname`/`rname` args. The default renaming scheme for duplicate columns has also changed. To get the exact same behavior as before, pass in `lname=\"{name}_x\", rname=\"{name}_y\"`.",
          "timestamp": "2023-04-11T16:04:53+02:00",
          "tree_id": "ab9a5c11f843684ff4061a26b903780de0a2427d",
          "url": "https://github.com/ibis-project/ibis/commit/d80aa1ee8f8bccb3c5b84cdf4091723bcf51bc97"
        },
        "date": 1681222369913,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1579.633772940655,
            "unit": "iter/sec",
            "range": "stddev: 0.00019355832740141976",
            "extra": "mean: 633.0581284916404 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4179081.5572778746,
            "unit": "iter/sec",
            "range": "stddev: 3.983127932667171e-7",
            "extra": "mean: 239.2870266575928 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.942302085021012,
            "unit": "iter/sec",
            "range": "stddev: 0.002012537277289308",
            "extra": "mean: 52.791893800002754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.51113791125924,
            "unit": "iter/sec",
            "range": "stddev: 0.00220099771741825",
            "extra": "mean: 22.466287022220715 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.55004924319048,
            "unit": "iter/sec",
            "range": "stddev: 0.002416905596472271",
            "extra": "mean: 26.631123531251966 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10181246657248319,
            "unit": "iter/sec",
            "range": "stddev: 0.20192893620734925",
            "extra": "mean: 9.821979897599983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 186.93997826471988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009296019459391841",
            "extra": "mean: 5.349310560975519 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 219.47254469102106,
            "unit": "iter/sec",
            "range": "stddev: 0.0004156814788437415",
            "extra": "mean: 4.556378573036664 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10062.00405147478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000760190998190975",
            "extra": "mean: 99.38378029707022 usec\nrounds: 5116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7373.71304734221,
            "unit": "iter/sec",
            "range": "stddev: 0.000058802832301546284",
            "extra": "mean: 135.61688576428142 usec\nrounds: 3983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1570.9324603180744,
            "unit": "iter/sec",
            "range": "stddev: 0.00015015085464738568",
            "extra": "mean: 636.56460430993 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.35692556860606,
            "unit": "iter/sec",
            "range": "stddev: 0.0012127449053877229",
            "extra": "mean: 15.538343250004626 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 855.3508826654454,
            "unit": "iter/sec",
            "range": "stddev: 0.0002259407891520278",
            "extra": "mean: 1.169110852944699 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.24786031509936,
            "unit": "iter/sec",
            "range": "stddev: 0.000643040402364631",
            "extra": "mean: 8.180102272730622 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1367.0075699022796,
            "unit": "iter/sec",
            "range": "stddev: 0.00006467627502393172",
            "extra": "mean: 731.5248444977411 usec\nrounds: 418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.458899215565282,
            "unit": "iter/sec",
            "range": "stddev: 0.0024185135839093915",
            "extra": "mean: 31.787507666676984 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 181.06667207793237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467388918669387",
            "extra": "mean: 5.522827522723746 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.7820807949208,
            "unit": "iter/sec",
            "range": "stddev: 0.0017185081233267202",
            "extra": "mean: 14.753161724638796 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 74.82119642002381,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448217005620911",
            "extra": "mean: 13.365196599988849 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1497.8756752656648,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099547617547973",
            "extra": "mean: 667.6121500021281 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 61.29963022301822,
            "unit": "iter/sec",
            "range": "stddev: 0.018189427763400937",
            "extra": "mean: 16.31331210909159 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.34784045863099,
            "unit": "iter/sec",
            "range": "stddev: 0.0016765914560564312",
            "extra": "mean: 30.913964759993178 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 180.66574378087037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564119374419728",
            "extra": "mean: 5.5350836250003255 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.43722367805373,
            "unit": "iter/sec",
            "range": "stddev: 0.004344884284747828",
            "extra": "mean: 7.725752852110591 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4749786.011789921,
            "unit": "iter/sec",
            "range": "stddev: 4.1544125409773147e-7",
            "extra": "mean: 210.5358004587623 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5864895473989001,
            "unit": "iter/sec",
            "range": "stddev: 0.01611693319213605",
            "extra": "mean: 1.705060225599982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119782.91155243223,
            "unit": "iter/sec",
            "range": "stddev: 0.000005922292199085022",
            "extra": "mean: 8.348436242195305 usec\nrounds: 17637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.093463501073891,
            "unit": "iter/sec",
            "range": "stddev: 0.008287007363665574",
            "extra": "mean: 244.2919057999802 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 391.00301285420306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005765866668294642",
            "extra": "mean: 2.5575250499997537 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 62.43478231731744,
            "unit": "iter/sec",
            "range": "stddev: 0.021343005213782754",
            "extra": "mean: 16.01671316667074 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.95498686570426,
            "unit": "iter/sec",
            "range": "stddev: 0.0029623563382368484",
            "extra": "mean: 34.53636517391932 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.38396580149372,
            "unit": "iter/sec",
            "range": "stddev: 0.0022280770774808153",
            "extra": "mean: 30.879479250002007 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.900946404672338,
            "unit": "iter/sec",
            "range": "stddev: 0.0020657196602687695",
            "extra": "mean: 84.02693080000745 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.532474898941041,
            "unit": "iter/sec",
            "range": "stddev: 0.035664788592595906",
            "extra": "mean: 1.8780227987999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1535.1312310802384,
            "unit": "iter/sec",
            "range": "stddev: 0.00018015054676478955",
            "extra": "mean: 651.4101073276464 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8388.36883515415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000610641348259385",
            "extra": "mean: 119.21268838456163 usec\nrounds: 4451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 663205.1222394075,
            "unit": "iter/sec",
            "range": "stddev: 0.000002007472179449974",
            "extra": "mean: 1.5078291262639167 usec\nrounds: 20243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.49057241099112,
            "unit": "iter/sec",
            "range": "stddev: 0.0015454761525937333",
            "extra": "mean: 14.18629422058824 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3046.0889896219783,
            "unit": "iter/sec",
            "range": "stddev: 0.00014619357382777374",
            "extra": "mean: 328.28981799514025 usec\nrounds: 1956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.49628017441476,
            "unit": "iter/sec",
            "range": "stddev: 0.001280638626589078",
            "extra": "mean: 11.696415305554494 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 65.90401350639647,
            "unit": "iter/sec",
            "range": "stddev: 0.002590016243419629",
            "extra": "mean: 15.173582712120297 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1470874.9094750334,
            "unit": "iter/sec",
            "range": "stddev: 0.00000653127083552882",
            "extra": "mean: 679.8674676943858 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.55550626806965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999554377759221",
            "extra": "mean: 12.729852400002528 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1453443.3418147985,
            "unit": "iter/sec",
            "range": "stddev: 9.095746982838711e-7",
            "extra": "mean: 688.0213154723871 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.71519957849258,
            "unit": "iter/sec",
            "range": "stddev: 0.0009931396742765904",
            "extra": "mean: 15.694842150938745 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5068872.267404429,
            "unit": "iter/sec",
            "range": "stddev: 0.000001186264900291292",
            "extra": "mean: 197.2825408188375 nsec\nrounds: 58821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58919.6795338392,
            "unit": "iter/sec",
            "range": "stddev: 0.000024129246776823462",
            "extra": "mean: 16.972257960528662 usec\nrounds: 10835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 76.44834502565328,
            "unit": "iter/sec",
            "range": "stddev: 0.0013835474973540652",
            "extra": "mean: 13.080727904108798 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.62990396597259,
            "unit": "iter/sec",
            "range": "stddev: 0.0015315601725557238",
            "extra": "mean: 13.768433460527556 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.3811785456358,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432138298709968",
            "extra": "mean: 5.0663391888137586 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 84.46994150859392,
            "unit": "iter/sec",
            "range": "stddev: 0.000712858079269949",
            "extra": "mean: 11.838530749997744 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2280426294082687,
            "unit": "iter/sec",
            "range": "stddev: 0.01808437679952582",
            "extra": "mean: 814.303979400006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2205742.487264228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014446953552348076",
            "extra": "mean: 453.3620791065782 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1190.5698548172802,
            "unit": "iter/sec",
            "range": "stddev: 0.006213452467748602",
            "extra": "mean: 839.9339156403154 usec\nrounds: 1055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1504.856452712962,
            "unit": "iter/sec",
            "range": "stddev: 0.00022319564410547033",
            "extra": "mean: 664.5152088740394 usec\nrounds: 924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 91.08511663330103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008927789601468196",
            "extra": "mean: 10.978742048779424 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 192.6818677204103,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979671409700457",
            "extra": "mean: 5.1899019447488595 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.8425620456832,
            "unit": "iter/sec",
            "range": "stddev: 0.0011306676769199003",
            "extra": "mean: 13.542325351351478 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7975187486193565,
            "unit": "iter/sec",
            "range": "stddev: 0.016618407317777886",
            "extra": "mean: 556.322431000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.41331406652515,
            "unit": "iter/sec",
            "range": "stddev: 0.0016162481107340268",
            "extra": "mean: 13.621507388888984 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.32398522265396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003304689619491993",
            "extra": "mean: 4.360642865285485 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 87.13700691668403,
            "unit": "iter/sec",
            "range": "stddev: 0.001080592772301232",
            "extra": "mean: 11.476180275002434 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5982065712914767,
            "unit": "iter/sec",
            "range": "stddev: 0.030288002968613045",
            "extra": "mean: 1.6716633484000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9513298.53307879,
            "unit": "iter/sec",
            "range": "stddev: 1.4333053217221768e-7",
            "extra": "mean: 105.11601170956835 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 583.5943932660108,
            "unit": "iter/sec",
            "range": "stddev: 0.00018347573768997364",
            "extra": "mean: 1.7135188609397514 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.62858221810788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008759501181131327",
            "extra": "mean: 5.245803060402816 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.51765639767902,
            "unit": "iter/sec",
            "range": "stddev: 0.0008782217818010924",
            "extra": "mean: 6.967783791208648 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.92189223072907,
            "unit": "iter/sec",
            "range": "stddev: 0.0017477910440343047",
            "extra": "mean: 14.100018605633304 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.93936487865072,
            "unit": "iter/sec",
            "range": "stddev: 0.0019149992267701653",
            "extra": "mean: 14.298099528571129 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1632198.3661382522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011777515465619424",
            "extra": "mean: 612.6706292238115 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.08568221673286,
            "unit": "iter/sec",
            "range": "stddev: 0.00047436347506273264",
            "extra": "mean: 8.058947512198557 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5840.052629318321,
            "unit": "iter/sec",
            "range": "stddev: 0.00015284767154143076",
            "extra": "mean: 171.23133359788315 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.38918868364137,
            "unit": "iter/sec",
            "range": "stddev: 0.0036584755087168503",
            "extra": "mean: 119.2010381111067 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.99577675377311,
            "unit": "iter/sec",
            "range": "stddev: 0.0007120195545545569",
            "extra": "mean: 8.130360459464502 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5801844178066056,
            "unit": "iter/sec",
            "range": "stddev: 0.019199844448539175",
            "extra": "mean: 1.7235898954000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 396439.10991476907,
            "unit": "iter/sec",
            "range": "stddev: 0.000003681450910910424",
            "extra": "mean: 2.5224554666541126 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.86828717086027,
            "unit": "iter/sec",
            "range": "stddev: 0.004509817832133755",
            "extra": "mean: 5.992750431818583 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.70384071521241,
            "unit": "iter/sec",
            "range": "stddev: 0.0009990460264573087",
            "extra": "mean: 10.3408509176481 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.04356621618805,
            "unit": "iter/sec",
            "range": "stddev: 0.0012164893227687064",
            "extra": "mean: 18.50359015909026 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1592.3452731530472,
            "unit": "iter/sec",
            "range": "stddev: 0.00014691126004414673",
            "extra": "mean: 628.0045018250798 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 484.4128754338565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004048480983799143",
            "extra": "mean: 2.0643547079634628 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 62.0454577665406,
            "unit": "iter/sec",
            "range": "stddev: 0.027921550428410408",
            "extra": "mean: 16.117215280491852 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.89198041229356,
            "unit": "iter/sec",
            "range": "stddev: 0.0013494496069802308",
            "extra": "mean: 13.352564513514313 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.76853767596938,
            "unit": "iter/sec",
            "range": "stddev: 0.0017358129126388742",
            "extra": "mean: 14.130573173332172 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.82082574320398,
            "unit": "iter/sec",
            "range": "stddev: 0.001037352966905841",
            "extra": "mean: 5.1861617962978 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 73.43353425590638,
            "unit": "iter/sec",
            "range": "stddev: 0.001847705720023969",
            "extra": "mean: 13.617756657539172 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1480.6110925612877,
            "unit": "iter/sec",
            "range": "stddev: 0.00020064270246832782",
            "extra": "mean: 675.3968040791283 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 171.90662755437242,
            "unit": "iter/sec",
            "range": "stddev: 0.0007773976692835308",
            "extra": "mean: 5.817111383234539 msec\nrounds: 167"
          }
        ]
      }
    ]
  }
}